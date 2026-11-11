# Decision log

Choices made while carrying out [refactor-plan.md](./refactor-plan.md) that the plan leaves open, or where the implementation differs from it. Newest first.

---

### D8: Keep `src/assets/sass/` and `arrow.png` until styling is ported

**Date:** 2026-11-11
**Context:** Step 8 deletes the old Sass tree, but steps 2 and 4 use `_vars.scss` and `main.scss` as the visual reference.
**Decision:** Delete everything Gatsby or the build would touch now. Keep `src/assets/sass/` (minus `fontawesome-all.min.css`) and `src/assets/images/arrow.png` in the tree until the styling is ported. Neither is imported, so neither affects the build. Both are in `.prettierignore`.
**Old JS components and pages:** deleted. Astro treats `.js` files in `src/pages/` as endpoints, so they could not stay. Copy is still available with `git show master:src/pages/index.js`.

### D7: TypeScript 6.x, not 7.x

**Date:** 2026-11-11
**Context:** `typescript@latest` is 7.0.2, but `@astrojs/check@0.9.12` declares a peer of `^5.0.0 || ^6.0.0`.
**Decision:** Pin `typescript@^6.0.3`. Move to 7 when `@astrojs/check` supports it.

### D6: Skip the optional `oxc-transform-react` peer

**Date:** 2026-11-11
**Context:** `@astrojs/react@7` lists an optional peer `oxc-transform-react >=0.145 <0.157`.
**Decision:** Not installed. The build works without it, and the site ships no client-side React.

### D5: Node version: `.nvmrc` = `22`, `engines.node >= 22.23.4`

**Date:** 2026-11-11
**Context:** Astro 7.4 requires `node >= 22.23.4`.
**Decision:** `.nvmrc` and Netlify `NODE_VERSION` both use `22`, which resolves to the latest 22.x. `engines` records the real minimum.

### D4: Netlify headers for `/sw.js`

**Date:** 2026-11-11
**Decision:** In addition to the plan, `netlify.toml` serves `/sw.js` with `Cache-Control: no-cache`, so browsers pick up the self-unregistering worker right away. The worker also reloads open tabs (`client.navigate`) after clearing caches, so a returning visitor sees the new site on that visit instead of the next one.

### D3: Site URL and metadata

**Date:** 2026-11-11
**Decision:** `site: 'https://jeffumbricht.com'` in `astro.config.mjs`, used for canonical and `og:url`. Meta description stays "Jeff Umbricht Portfolio", as in the old `Layout.js`, and is now in `config.ts`. The `keywords` meta ("site, web") was dropped as meaningless. The PWA manifest fields in `config.js` were dropped, as the plan says.
**Open:** worth writing a better description, and maybe adding an `og:image` (e.g. a resized banner) in step 6.

### D2: Prettier config

**Date:** 2026-11-11
**Decision:** Kept the existing `.prettierrc` options (`semi`, `singleQuote`, `trailingComma: es5`) and added `prettier-plugin-astro` and `prettier-plugin-tailwindcss`, with `tailwindStylesheet` pointing at `src/styles/global.css` so class sorting knows the v4 theme. `format` now runs over the whole repo (`prettier --write .`). `.gitignore` is respected automatically.

### D1: Work branch

**Date:** 2026-11-11
**Decision:** `claude/nice-maxwell-96apb9` holds the plan commit. The session's working branch `ccr-90d5b89f-p9bnn4` was fast-forwarded onto it, and all refactor work is committed and pushed there.
