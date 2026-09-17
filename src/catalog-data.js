// Pure catalog logic: shared by the static build (Node), the browser UI and
// the tests. No DOM, no Node-only APIs — only what both runtimes provide.

export const categories = [
  {
    id: "games",
    name: "Games",
    description: "Play them, break them, compare the models behind them.",
  },
];

export const sortModes = ["name", "name-desc", "model"];

export function normalize(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

export function validateManifest(build, slug) {
  const fail = (message) => {
    throw new Error(`builds/${slug}/build.json: ${message}`);
  };
  if (!build || typeof build !== "object" || Array.isArray(build))
    fail("must be a JSON object");
  if (!/^[a-z0-9]+(?:-[a-z0-9.]+)*$/.test(slug) || build.slug !== slug)
    fail("slug must match its folder name (lowercase letters, numbers, dots or hyphens)");
  if (typeof build.title !== "string" || !build.title.trim())
    fail("title is required");
  if (!categories.some((c) => c.id === build.category))
    fail(`category must be one of: ${categories.map((c) => c.id).join(", ")}`);
  if (
    !Object.hasOwn(build, "model") ||
    (build.model !== null && (typeof build.model !== "string" || !build.model.trim()))
  )
    fail("model must name the builder model, or be null when unknown");
  for (const field of ["version", "summary", "description"])
    if (build[field] !== undefined && typeof build[field] !== "string")
      fail(`${field} must be a string`);
  if (
    build.tags !== undefined &&
    (!Array.isArray(build.tags) ||
      build.tags.some((t) => typeof t !== "string" || !t.trim()))
  )
    fail("tags must be an array of non-empty strings");
  if (
    build.accent !== undefined &&
    !/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(build.accent)
  )
    fail("accent must be a hex color, e.g. #0af");
  if (
    build.cover !== undefined &&
    (typeof build.cover !== "string" ||
      !build.cover ||
      /[\\?#:]/.test(build.cover) ||
      build.cover.startsWith("/") ||
      build.cover.split("/").some((p) => !p || p === "." || p === ".."))
  )
    fail("cover must be a relative path to a file inside this build folder");
  if (
    build.omp !== undefined &&
    (build.omp === null ||
      typeof build.omp !== "object" ||
      Array.isArray(build.omp))
  )
    fail("omp must be an object or omitted");
  if (build.omp) {
    for (const field of ["session", "logo"]) {
      const value = build.omp[field];
      if (
        value !== undefined &&
        (typeof value !== "string" ||
          !value ||
          /[\\?#:]/.test(value) ||
          value.startsWith("/") ||
          value.split("/").some((p) => !p || p === "." || p === ".."))
      )
        fail(`omp.${field} must be a relative path to a file inside this build folder`);
    }
    if (build.omp.session === undefined) fail("omp.session is required when omp is present");
  }
  return build;
}

export function filterBuilds(builds, state, { ignoreCategory = false } = {}) {
  const words = normalize(state.q).split(" ").filter(Boolean);
  return builds.filter((build) => {
    if (!ignoreCategory && state.category && build.category !== state.category)
      return false;
    if (state.model && (build.model ?? "unknown") !== state.model) return false;
    if (state.tag && !(build.tags ?? []).some((t) => normalize(t) === normalize(state.tag)))
      return false;
    const haystack = normalize(
      [
        build.title,
        build.slug,
        build.model,
        build.version,
        build.summary,
        build.description,
        ...(build.tags ?? []),
        categories.find((c) => c.id === build.category)?.name ?? "",
      ].join(" "),
    );
    return words.every((word) => haystack.includes(word));
  });
}

export function sortBuilds(builds, mode = "name") {
  return [...builds].sort((a, b) => {
    if (mode === "model") {
      if (!a.model && b.model) return 1;
      if (a.model && !b.model) return -1;
      const byModel = collator.compare(a.model ?? "", b.model ?? "");
      if (byModel) return byModel;
    }
    const byTitle = collator.compare(a.title, b.title);
    if (byTitle) return mode === "name-desc" ? -byTitle : byTitle;
    const byModel = collator.compare(a.model ?? "", b.model ?? "");
    if (byModel) return byModel;
    return collator.compare(a.slug, b.slug);
  });
}

export function readFilters(search, builds) {
  const params = new URLSearchParams(search);
  const model = params.get("model") ?? "";
  const wantedTag = normalize(params.get("tag"));
  const tag =
    builds.flatMap((b) => b.tags ?? []).find((t) => normalize(t) === wantedTag) ?? "";
  return {
    q: (params.get("q") ?? "").slice(0, 200),
    category: categories.some((c) => c.id === params.get("category"))
      ? params.get("category")
      : "",
    model: builds.some((b) => (b.model ?? "unknown") === model) ? model : "",
    tag,
    sort: sortModes.includes(params.get("sort")) ? params.get("sort") : "name",
  };
}

export function writeFilters(state, search = "") {
  const params = new URLSearchParams(search);
  for (const key of ["q", "category", "model", "tag", "sort"]) {
    if (state[key] && !(key === "sort" && state[key] === "name"))
      params.set(key, state[key]);
    else params.delete(key);
  }
  return params.toString();
}