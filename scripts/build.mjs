import { cp, mkdir, readFile, readdir, rm, stat, writeFile, realpath } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validateManifest } from "../src/catalog-data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildsRoot = path.join(root, "builds");
const output = path.join(root, "dist");

// The site shell is a first-class part of the deployable; fail loudly until it exists.
for (const file of ["index.html", "styles.css"]) {
  const shell = path.join(root, file);
  if (!(await stat(shell, { throwIfNoEntry: false }))?.isFile())
    throw new Error(
      `Missing site shell: ${file}. The catalog UI is not in place yet — npm test still works.`,
    );
}

const entries = await readdir(buildsRoot, { withFileTypes: true });
const builds = [];

for (const entry of entries
  .filter((item) => item.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))) {
  const buildDir = path.join(buildsRoot, entry.name);
  let manifest;
  try {
    manifest = JSON.parse(await readFile(path.join(buildDir, "build.json"), "utf8"));
  } catch (error) {
    throw new Error(`Invalid or missing manifest: builds/${entry.name}/build.json`, {
      cause: error,
    });
  }
  validateManifest(manifest, entry.name);
  if (!(await stat(path.join(buildDir, "index.html"))).isFile())
    throw new Error(`Missing build entry point: builds/${entry.name}/index.html`);
  if (manifest.cover) {
    const cover = await realpath(path.join(buildDir, manifest.cover));
    if (
      !cover.startsWith(`${await realpath(buildDir)}${path.sep}`) ||
      !(await stat(cover)).isFile()
    )
      throw new Error(`Cover must be a file inside builds/${entry.name}`);
  }
  let omp = undefined;
  if (manifest.omp) {
    for (const field of ["session", "logo"]) {
      if (manifest.omp[field] === undefined) continue;
      const ompFile = await realpath(path.join(buildDir, manifest.omp[field]));
      if (
        !ompFile.startsWith(`${await realpath(buildDir)}${path.sep}`) ||
        !(await stat(ompFile)).isFile()
      )
        throw new Error(`omp.${field} must be a file inside builds/${entry.name}`);
    }
    // Metrics are computed from the shipped session, never hand-written into the manifest.
    const session = JSON.parse(
      Buffer.from(
        (await readFile(path.join(buildDir, manifest.omp.session), "utf8"))
          .replace(/^[\s\S]*?<script id="session-data"[^>]*>/, "")
          .replace(/<\/script>[\s\S]*$/, "")
          .replace(/\s+/g, ""),
        "base64",
        "utf8",
      ),
    );
    const entriesList = session.entries ?? [];
    const roleCount = (role) =>
      entriesList.filter(
        (item) => item?.type === "message" && item?.message?.role === role,
      ).length;
    const first = Date.parse(entriesList[0]?.timestamp ?? session.header?.timestamp);
    const last = Date.parse(entriesList[entriesList.length - 1]?.timestamp);
    const minutes = Number.isFinite(first) && Number.isFinite(last)
      ? Math.max(0, Math.round((last - first) / 60000))
      : null;
    omp = {
      requests: roleCount("user"),
      toolCalls: roleCount("toolResult"),
      minutes,
    };
  }
  builds.push({
    ...manifest,
    ...(manifest.cover ? { cover: `./builds/${entry.name}/${manifest.cover}` } : {}),
    ...(manifest.omp
      ? {
          omp: {
            ...Object.fromEntries(
              Object.entries(manifest.omp).map(([key, value]) => [
                key,
                `./builds/${entry.name}/${manifest.omp[key]}`,
              ]),
            ),
            ...(omp ?? {}),
          },
        }
      : {}),
    path: `./builds/${entry.name}/`,
  });
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

// Optional shell assets: self-hosted fonts, brand logo (dropped at repo root).
const extra = [];
const fontsDir = path.join(root, "fonts");
if ((await stat(fontsDir, { throwIfNoEntry: false }))?.isDirectory())
  extra.push(cp(fontsDir, path.join(output, "fonts"), { recursive: true }));
if (
  (await stat(path.join(root, "logo.svg"), { throwIfNoEntry: false }))?.isFile()
)
  extra.push(cp(path.join(root, "logo.svg"), path.join(output, "logo.svg")));

await Promise.all([
  ...extra,
  cp(path.join(root, "index.html"), path.join(output, "index.html")),
  cp(path.join(root, "styles.css"), path.join(output, "styles.css")),
  cp(path.join(root, "src"), path.join(output, "src"), { recursive: true }),
  cp(buildsRoot, path.join(output, "builds"), { recursive: true }),
  writeFile(path.join(output, ".nojekyll"), ""),
  writeFile(
    path.join(output, "builds.json"),
    `${JSON.stringify(builds, null, 2)}\n`,
  ),
]);

console.log(`Built nksv-ml-bench with ${builds.length} build(s).`);