# NKS ML-Bench: guide for agents

NKS ML-Bench is a static catalog of AI-built artifacts. The collection starts
with playable games; 3D showcases, data visualizations and benchmark results
will be added later. The category registry in `src/catalog-data.js` is the
single extension point for new sections — there is no second hardcoded list
anywhere.

## Commands
- `npm run build` — validates every manifest and assembles the site into
  `dist/`.
- `npm run serve` — serves `dist/` at http://127.0.0.1:4176 via Python 3.
  Build first; no hot reload.

Node 22+. No npm packages, no frontend framework. `dist/` is generated output
— never edit or commit it.

## Files and ownership

- `index.html`, `styles.css` — site shell and design tokens. Palette, fonts
  and spacing live in the `:root` block of `styles.css`; swap values there,
  never in component rules.
- `src/catalog-data.js` — pure catalog logic: category registry, manifest
  validation, filtering, sorting, URL state. No DOM, no Node-only APIs; shared
  by the build, the browser UI and the tests.
- `logo.svg` (optional) — brand mark in the masthead; when absent the header
  falls back to the wordmark tile.
- `fonts/` — self-hosted Open Runde woff2 weights (SIL OFL 1.1), referenced
  by the `@font-face` blocks in `styles.css`.
- `src/catalog.js` — browser rendering only: DOM, filter controls, history.
- `scripts/build.mjs` — static build and filesystem validation.
- `tests/catalog.test.mjs` — tests against the real collection plus fixtures.
- `builds/<slug>/` — one self-contained static build per directory.
- `builds/<slug>/build.json` — catalog metadata, the source of truth for the
  card.
- `.github/workflows/pages.yml` — GitHub Pages deployment on pushes to `main`.

Inspect `git status` before work. Preserve unrelated changes and existing
build URLs. Homepage changes must not touch build code or assets.

## Design

The shell is a benchmark scoreboard: flat dark surfaces, no gradients anywhere
(not in backgrounds, text or shadows). Two committed accents with fixed roles
— keep them that way:

- `--accent` `#5b4cff` (indigo) — the interactive layer: focus rings, links,
  active filters, tags, brand mark.
- `--accent-2` `#ac2954` (crimson) — the model layer: model badges, errors,
  the brand second tone. `-soft`/`-tint` variants serve text on dark
  surfaces and flat colored fills.

Typography: Open Runde (self-hosted `./fonts/*.woff2`, SIL OFL 1.1) is the
single family for display and body text (wordmark, hero, section titles,
controls); the system mono serves data (counts, versions, slugs). To swap a
font, replace the woff2 files and the `@font-face` blocks; component rules
must not name families.

All other tokens (neutrals, radii, spacing) live in the `:root` block of
`styles.css` — change values there, never in component rules. Icons are
authored SVG with one consistent stroke; never substitute Unicode glyphs.

## Manifest schema

Required: `slug`, non-empty `title`, valid `category`, and `model` (non-empty
string or `null`).
Optional: `version`, `summary`, `description`, `accent` (3- or 6-digit hex),
`tags` (non-empty strings), `cover` (relative path inside the build folder),
`omp` (object with a required `session` and optional `logo`, both relative
paths inside the build folder). `omp` marks a build authored in Oh My Pi and
exposes the exported session transcript for download; `logo` renders the
official project mark (fetch `assets/icon.svg` from the oh-my-pi repository,
ship its MIT license alongside, and never redraw or restyle it).

- `model` names the model that **built** the project — not a model it
  visualizes or is benchmarked against. Use `null` when authorship is unknown;
  never guess.
- `version` is a build label, not a substitute for authorship.
- Keep labels factual: no invented benchmark results, dates, scores or
  completion claims. No invented screenshots.
- Reuse the exact model spelling of existing manifests so one model does not
  split into duplicate filters. A genuinely new model name becomes a filter
  option automatically.

Example:

```json
{
  "slug": "example-arena",
  "title": "Example Arena",
  "category": "games",
  "model": "Model X",
  "omp": {
    "session": "omp/session.html",
    "logo": "omp/logo.svg"
  },
  "version": "September build",
  "summary": "An arena shooter with escalating waves.",
  "description": "Actual gameplay, features and creation context.",
  "accent": "#ff703e",
  "tags": ["FPS", "Three.js", "WebGL"],
  "cover": "cover.webp"
}
```

## Categories

Currently: `games` (playable builds). To add a category: extend the registry
in `src/catalog-data.js` (`id`, `name`, `description`), add its icon in
`src/catalog.js`, update this file and the tests. A build belongs to exactly
one category.

## Add a build

1. Pick a unique lowercase URL-safe slug (letters, numbers, hyphens). Never
   rename a published build: its URL is shared.
2. Copy the production static build into `builds/<slug>/` — `index.html` plus
   every local asset. Asset URLs relative to the build folder (Vite:
   `vite build --base=./`). Never copy `node_modules/`, caches or secrets.
3. Create `build.json` per the schema. For third-party code, fonts or assets
   add `CREDITS.md` and `licenses/` inside the build folder.
4. A cover is a real screenshot or preview inside the build folder; omit it
   when nothing was captured — the catalog supplies section artwork.
5. Run `npm test` and `npm run build`, then check the card, the filters and
   the actual build at `/builds/<slug>/` in a real browser (assets, console).
   A passing build does not prove it runs correctly.

## Commit and deploy

- Follow the requested scope; never force-push `main`.
- Pushes to `main` deploy via GitHub Pages to
  https://necrasov-ilya.github.io/nksv-ml-bench/.
- After an authorized release, verify the deployed homepage, filters and the
  new build URL in a real browser before reporting done.
- The catalog concept is inspired by
  [Bench Portal](https://github.com/alesha-pro/bench-portal) by
  [Alexey](https://github.com/alesha-pro) — keep the attribution in the
  README and the site footer intact.