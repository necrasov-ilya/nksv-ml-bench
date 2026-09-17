# NKS ML-Bench

A static catalog of AI-built artifacts: playable games, 3D showcases,
visualizations and benchmark results. Filter by category, builder model and
tags; share filtered URLs. No npm packages, no framework — a static build on
GitHub Pages.

> Status: full stack in place. Palette and typography are committed
> (tokens in `styles.css` `:root`); the brand logo is pending.

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

## License

MIT — see [LICENSE](LICENSE).