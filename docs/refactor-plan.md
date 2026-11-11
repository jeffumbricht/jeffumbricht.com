# Refactor jeffumbricht.com to Astro + React + TypeScript + Tailwind

## Context

The site is a single static landing page (plus a 404) built in 2020 from the `gatsby-starter-spectral` template: Gatsby 2, React 16, `node-sass` (deprecated, will not build on current Node), class components, PropTypes, no lockfile, no TypeScript. It carries ~3,000 lines of template Sass (forms, tables, menu, header are unused), the full Font Awesome webfont set (15 font files) for 12 icons, a smooth-scroll polyfill, and an offline service worker.

Goal: same content and broadly the same look, on a small modern stack that is easy to keep current. Decisions made: **Astro + React** (static HTML, TSX components) and a **Tailwind rewrite** of the styles.

## Target stack

- Astro (latest) with `@astrojs/react`, React 19, TypeScript `strict`
- Tailwind CSS v4 via `@tailwindcss/vite` (CSS-first config, no `tailwind.config.js`)
- Self-hosted Open Sans via `@fontsource-variable/open-sans` (replaces the Google Fonts `@import`)
- Prettier 3 with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- Node 22 (`.nvmrc`), npm, committed `package-lock.json`
- Deliberately left out: ESLint, tests, CI workflow, PWA manifest, CMS/content collections. `astro check` in the build script plus Netlify's build covers type and build errors.

No client-side JavaScript is needed: React components render at build time only (no `client:*` directives).

## Structure

```
astro.config.mjs        react() integration, tailwind vite plugin, site URL
tsconfig.json           extends astro/tsconfigs/strict, jsx: react-jsx
netlify.toml            build = "npm run build", publish = "dist", NODE_VERSION
public/
  favicon.png           from src/assets/img/website-icon.png
  sw.js                 self-unregistering service worker (see below)
src/
  config.ts             typed port of config.js (heading, subHeading, email, socialLinks)
  styles/global.css     @import "tailwindcss"; @theme tokens; base styles
  layouts/Layout.astro  <html>, <head> meta/title, <main>, <Footer />
  pages/index.astro     composes sections, optimizes images
  pages/404.astro
  components/
    Banner.tsx  Intro.tsx  Spotlights.tsx  Skills.tsx  Cta.tsx  Footer.tsx
    Icon.tsx            12 inline SVG icons keyed by name
  assets/images/        banner.jpg, pic01-03.jpg
```

## Steps

1. **Scaffold.** Replace `package.json` deps and scripts (`dev`, `build` = `astro check && astro build`, `preview`, `format`). Add the config files above. Remove `package-lock.json` and `yarn.lock` from `.gitignore`; ignore `dist` and `.astro`. Delete `gatsby-config.js`, `config.js`, `.prettierrc` settings carry over.

2. **Design tokens.** Port the palette, font weights, and breakpoints from `src/assets/sass/libs/_vars.scss` into `@theme` in `global.css` so section colors (`style1`–`style4` backgrounds, accent colors) match today. Base rules there: `html { scroll-behavior: smooth }` behind `prefers-reduced-motion`, focus-visible styles, body font.

3. **Layout.** `Layout.astro` replaces `Layout.js` + react-helmet + the GraphQL `StaticQuery`: title from `config.ts`, description meta, `lang="en"`, favicon, `<main>` landmark. Add basic Open Graph tags (cheap, useful for a portfolio).

4. **Components.** Port `src/pages/index.js` section by section into the TSX components, keeping all copy verbatim and the existing heading hierarchy. Repeated content (three spotlights, six skills, three intro icons) becomes typed arrays mapped in the component. Style with Tailwind utilities, using `src/assets/sass/main.scss` sections (Banner, Wrapper, Spotlight, Features, CTA, Footer) as the visual reference.
   - `Scroll.js` and `smoothscroll-polyfill` are dropped: the "Learn More" link is a plain `<a href="#one">` with CSS smooth scroll.
   - The `is-preload` timeout in `Layout.js` is replaced by a CSS-only fade-in animation on the banner (disabled for reduced motion).
   - `arrow.png` becomes an inline SVG chevron; `bars.png` and `close.png` are unused and deleted.

5. **Icons.** `Icon.tsx` holds the SVG paths for the 12 icons in use (github, linkedin, envelope, terminal, database, code, html5, bootstrap, drupal, universal-access, git-alt, jira) taken from Font Awesome Free, with a license comment. Decorative icons get `aria-hidden`; the existing screen-reader labels are kept with Tailwind's `sr-only`. Delete `src/assets/webfonts/` and `fontawesome-all.min.css`.

6. **Images.** The four JPEGs are ~270–340 KB each. In `index.astro`, use `getImage()` from `astro:assets` to emit resized WebP versions and pass the URLs to `Banner` and `Spotlights` as props (astro's `<Image>` cannot be used inside React components). Spotlight images get `loading="lazy"` and explicit width/height.

7. **Service worker cleanup.** `gatsby-plugin-offline` registered a service worker at `/sw.js` for past visitors; without action they keep seeing the cached old site. Ship a small `public/sw.js` that calls `skipWaiting()`, unregisters itself, and clears caches.

8. **Delete the old tree.** `src/assets/sass/`, `src/components/*.js`, `src/pages/*.js`, `src/assets/img/`.

9. **README.** Update quick start (`npm install`, `npm run dev`, `npm run build`), keep the Netlify badge, keep Spectral design credit (CCA 3.0 attribution).

## Deployment note

Netlify currently builds Gatsby into `public/`. `netlify.toml` switches the publish directory to `dist` and pins Node; it overrides the UI settings, so no dashboard change should be needed. Worth checking the first deploy preview before merging.

## Verification

- `npm run build` passes (`astro check` reports no type errors) and `dist/index.html` contains the full page content as static HTML with no framework JS bundle.
- `npm run preview`, then Playwright screenshots at 375, 768, and 1280 px wide, compared side by side with the same screenshots of the live site for layout, colors, and spacing.
- Keyboard pass: tab order, visible focus, "Learn More" scrolls to the intro section, mailto and social links correct.
- Check `dist/sw.js` exists, `/404.html` is generated, and total page weight is well below the current build.

## Open decision: UI direction

Three mockups using the current copy are on a design canvas (private link): https://claude.ai/artifact/TTM2MCzDSBbwbMboMnPmoZ

- **A · Spectral, refined:** closest to today's site; dark slate, centered uppercase name, teal accent.
- **B · Editorial light:** light, left-aligned, large headline, small top nav, skills as a ruled list.
- **C · Bento, one screen:** compact grid of rounded cards on light grey.

Not yet chosen. Steps 2 and 4 above assume the current look; if A, B, or C is picked, the mockup replaces `main.scss` as the visual reference and the design tokens come from it instead of `_vars.scss`.
