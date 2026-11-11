# Refactor progress

Tracks work against [refactor-plan.md](./refactor-plan.md). Design and tooling choices are logged in [decision.md](./decision.md).

## Status by plan step

| #   | Step                   | Status      | Notes                                                                                                                                    |
| --- | ---------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Scaffold               | Done        | Astro 7, React 19, TS strict, Tailwind 4, Prettier 3. `npm run build` passes with 0 `astro check` errors.                                |
| 2   | Design tokens          | Not started | `global.css` has the Tailwind import, font, and smooth scroll only. Waiting on the UI direction decision (A / B / C).                    |
| 3   | Layout                 | Mostly done | `Layout.astro`: title, description, canonical, favicon, OG tags, `<main>`, footer. Banner fade-in comes with step 4.                     |
| 4   | Components             | Stubbed     | `Banner`, `Intro`, `Spotlights`, `Skills`, `Cta` return `null`. `Footer` renders links with no styling.                                  |
| 5   | Icons                  | Stubbed     | `Icon.tsx` has the typed `IconName` union for all 12 icons. SVG paths still to add.                                                      |
| 6   | Images                 | Not started | JPEGs are in `src/assets/images/`. `getImage()` wiring to come.                                                                          |
| 7   | Service worker cleanup | Done        | `public/sw.js` unregisters itself and clears caches. `netlify.toml` serves it with `Cache-Control: no-cache`.                            |
| 8   | Delete old tree        | Mostly done | Gatsby files, JS components/pages, webfonts, Font Awesome CSS, `bars.png`, `close.png` removed. Sass and `arrow.png` kept for reference. |
| 9   | README                 | Done        | New quick start; Netlify badge and Spectral credit kept.                                                                                 |

## Log

### 2026-11-11: Initial scaffolding

- Branched from `claude/nice-maxwell-96apb9` (adds the plan) onto the working branch `ccr-90d5b89f-p9bnn4`.
- Replaced `package.json`: removed every Gatsby, Sass, Helmet, `react-images`, `react-scrollspy`, `smoothscroll-polyfill`, `gh-pages` and `rimraf` dependency. New scripts: `dev`, `build`, `preview`, `check`, `format`, `format:check`. `package-lock.json` committed.
- Added `astro.config.mjs`, `tsconfig.json`, `netlify.toml`, `.nvmrc` (22), `.prettierignore`. Updated `.gitignore` and `.prettierrc` (same settings, plus plugins).
- Moved `src/assets/img/website-icon.png` to `public/favicon.png`.
- Added `public/sw.js`, `src/config.ts`, `src/styles/global.css`, `src/layouts/Layout.astro`, `src/pages/index.astro`, `src/pages/404.astro`, and component stubs.
- Checked: `npm run build` gives 0 errors, 0 warnings. `dist/` contains `index.html`, `404.html`, `sw.js`, `favicon.png`, and no `<script>` tags in the HTML. `prettier --check .` passes.

## Next up

1. Choose the UI direction (A, B or C, or keep the current look). This decides where the step 2 tokens and the step 4 styling come from.
2. Step 5: Icon SVG paths.
3. Step 4: port the section copy verbatim from `git show master:src/pages/index.js`.
4. Step 6: image pipeline.
5. Finish step 8: delete `src/assets/sass/` and `arrow.png` once the styling is ported.
6. Verification pass (screenshots at 375, 768 and 1280 px, keyboard pass, page weight).
