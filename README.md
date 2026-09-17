# NKS ML-Bench

A static catalog of AI-built artifacts: playable games, 3D showcases,
visualizations and benchmark results. Filter by category, builder model and
tags; share filtered URLs. No npm packages, no framework — a static build on
GitHub Pages.

The shell uses NKSV's dark portfolio palette and vector mark: a two-column
collection beside a sticky, glyph-rendered logo. Search and filters share one
compact pill. Real covers become ASCII previews, revealing on hover or keyboard
focus; touch screens show the images directly. The text field reacts to the
pointer and clicks. Reduced-motion preferences disable animation.

Palette, typography and spacing live in `styles.css` `:root`; canvas effects
live in `src/visual-effects.js`. The original mark is shipped as `logo.svg`.

## Local development

```sh
npm test        # catalog and manifest tests (Node built-in runner)
npm run build   # validate all manifests, assemble dist/
npm run serve   # serve dist/ at http://127.0.0.1:4176 (build first)
```

Node 22+. Python 3 powers the local preview only.

## Add a build

Drop a self-contained static build plus `build.json` into `builds/<slug>/` —
relative asset URLs only. The manifest is the single source of truth for the
catalog card. See [AGENTS.md](AGENTS.md) for the schema and the full process.

## Deploy

Pushes to `main` deploy via GitHub Pages (`.github/workflows/pages.yml`).

## Credits

Concept and architecture inspired by
[Bench Portal](https://github.com/alesha-pro/bench-portal) by
[Alexey](https://github.com/alesha-pro).

Visual references: NKSV's portfolio Practice section and the
[Content Architecture showcase](https://www.contentarchitecture.dev/#showcase).
Preview glyphs are generated locally from each build's real cover; no external
runtime or reference-site assets are required.

## License

MIT — see [LICENSE](LICENSE).