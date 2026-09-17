import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import {
  categories,
  normalize,
  validateManifest,
  filterBuilds,
  sortBuilds,
  readFilters,
  writeFilters,
} from "../src/catalog-data.js";

const buildsRoot = new URL("../builds/", import.meta.url);

// The shipped collection: every build must validate against its folder name.
const shipped = [];
for (const entry of await readdir(buildsRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  shipped.push({
    slug: entry.name,
    build: JSON.parse(await readFile(new URL(`${entry.name}/build.json`, buildsRoot), "utf8")),
  });
}

// Deterministic fixtures for behavior tests, independent of the collection.
const fixture = [
  {
    slug: "demo-arena",
    title: "Demo Arena",
    category: "games",
    model: "Model B",
    version: "v2",
    summary: "An arena shooter with escalating waves.",
    tags: ["FPS", "Three.js"],
    accent: "#0af",
  },
  {
    slug: "demo-cruiser",
    title: "Demo Cruiser 10",
    category: "games",
    model: "Model A",
    description: "A drift line through an archipelago.",
    tags: ["WebGL"],
  },
  {
    slug: "demo-orbit",
    title: "Demo Orbit",
    category: "games",
    model: null,
    summary: "A procedural world with no builder on record.",
  },
];

test("every shipped manifest validates against its folder name", () => {
  for (const { slug, build } of shipped) assert.equal(validateManifest(build, slug), build);
});

test("shipped builds belong to a known category", () => {
  for (const { build } of shipped)
    assert.ok(categories.some((c) => c.id === build.category));
});

test("valid manifests pass and return themselves", () => {
  for (const build of fixture) assert.equal(validateManifest(build, build.slug), build);
});

test("invalid manifests are rejected with the manifest path in the message", () => {
  const base = fixture[0];
  for (const patch of [
    { slug: "other" },
    { title: "   " },
    { category: "puzzles" },
    { model: "" },
    { version: 7 },
    { tags: "FPS" },
    { tags: ["", "ok"] },
    { accent: "red;opacity:0" },
    { accent: "#12345" },
    { cover: "../outside.webp" },
    { cover: "/absolute.webp" },
    { cover: "https://example.com/a.webp" },
    { omp: "session.html" },
    { omp: { session: "/absolute.html" } },
    { omp: { session: "https://example.com/s.html" } },
    { omp: { logo: "omp/logo.svg" } },
  ]) {
    assert.throws(() => validateManifest({ ...base, ...patch }, base.slug), /build\.json:/);
  }
  assert.throws(() => validateManifest("nope", "demo-arena"), /build\.json:/);
  assert.throws(() => validateManifest(null, "demo-arena"), /build\.json:/);
});

test("normalize strips diacritics, punctuation and case", () => {
  assert.equal(normalize("  Café & WebGL… "), "cafe webgl");
});

test("filters combine with AND semantics; category counts ignore only the category", () => {
  const state = {
    q: "arena model b",
    category: "games",
    model: "Model B",
    tag: "fps",
    sort: "name",
  };
  assert.deepEqual(filterBuilds(fixture, state).map((b) => b.slug), ["demo-arena"]);
  assert.equal(filterBuilds(fixture, { ...state, category: "nope" }).length, 0);
  assert.deepEqual(
    filterBuilds(fixture, state, { ignoreCategory: true }).map((b) => b.slug),
    ["demo-arena"],
  );
  assert.equal(filterBuilds(fixture, { q: "arena webgl" }).length, 0);
});

test("unknown models filter as 'unknown'", () => {
  assert.deepEqual(
    filterBuilds(fixture, { model: "unknown" }).map((b) => b.slug),
    ["demo-orbit"],
  );
});

test("URL state round-trips and unknown values fall back safely", () => {
  const state = {
    q: "rifle & recoil",
    category: "games",
    model: "Model B",
    tag: "Three.js",
    sort: "model",
  };
  assert.deepEqual(readFilters(writeFilters(state), fixture), state);
  assert.equal(
    writeFilters(
      { q: "", category: "", model: "", tag: "", sort: "name" },
      "?q=old&utm_source=x",
    ),
    "utm_source=x",
  );
  const bad = readFilters("?category=nope&model=fake&tag=missing&sort=bad", fixture);
  assert.deepEqual(bad, { q: "", category: "", model: "", tag: "", sort: "name" });
  assert.equal(filterBuilds(fixture, bad).length, fixture.length);
});

test("sorting is deterministic, does not mutate input, and files unknown models last", () => {
  const before = fixture.map((b) => b.slug);
  assert.deepEqual(sortBuilds(fixture, "name").map((b) => b.slug), [
    "demo-arena",
    "demo-cruiser",
    "demo-orbit",
  ]);
  assert.deepEqual(sortBuilds(fixture, "name-desc").map((b) => b.slug), [
    "demo-orbit",
    "demo-cruiser",
    "demo-arena",
  ]);
  assert.deepEqual(sortBuilds(fixture, "model").map((b) => b.slug), [
    "demo-cruiser",
    "demo-arena",
    "demo-orbit",
  ]);
  assert.equal(sortBuilds(fixture, "model").at(-1).model, null);
  assert.deepEqual(fixture.map((b) => b.slug), before);
});