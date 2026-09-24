# Infinite Code Tech — Fashion E-commerce Demo

Original fashion prototype branded for Infinite Code Tech (ICT). Text wordmarks follow the official typography; the favicon reuses the official company asset.

## Run

Node.js 22.12+ (verification uses Node 24), npm.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Build output: `dist/`. All local source/assets/configuration are included. `node_modules` is excluded and restored with `npm ci`.

## Deployment

GitHub Pages serves this repository at https://yam-lab9.github.io/ict-fashion-demo/. The Vite base is `/ict-fashion-demo/` so generated asset and favicon URLs resolve under that project path.

In the repository's **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. The workflow in `.github/workflows/main.yml` installs dependencies with `npm ci`, builds with `npm run build`, and deploys `dist/` on pushes to `main`. It can also be run manually from the Actions tab. The existing `predeploy` / `deploy` scripts are retained as legacy commands; they are not used by this workflow.

For a different host at its domain root, build with `npm run build -- --base=/`. For a different subdirectory supply that path with `--base`. The favicon uses Vite's BASE_URL so it follows deployment configuration.

## Demo scope

Client-side React 19 / Vite 8 app. Catalog, cart, coupons, orders and admin edits use in-memory state and reset on reload. No backend, admin authentication, payment processing, actual order placement or contact delivery is implemented. Existing unfinished controls remain as supplied. ICT10 replaces the original branded coupon.

Company contact details and links were verified against https://infinitecodetech.com/: info@infinitecodetech.com, +880 1837686860, and Kazir Dewri, Chittagong 4000, Bangladesh. Phone, email, WhatsApp and official social links are actionable. Customization and admin messaging remain demo previews. The contact form does not send messages. Reviews, statistics, prices, delivery policies, catalog descriptions and sample orders are demo content, not claims about ICT's real business. No products, product swatch colors, product layouts or commerce logic were changed.

Original third-party image URLs and Google Fonts are retained. They require internet access; image licensing, availability and embedded watermarks have not been verified. The uploaded source does not contain those remote image files.

## Branding

The official site's CSS and rendered styles were inspected on 2026-09-23 and rechecked on 2026-09-24. Primary olive #4E6829, hover #3A4F1B, edge #637C35; white #FFFFFF, surface #F8FAF2, inset #F2F6E8, hover surface #EDF3DA; text #1A2410, secondary #3A5018, muted #5A6E3A; gold #8A6D0B and #B08D14. Borders use translucent olive (#4E68291F / #4E682938). Existing semantic error/success colors and garment swatches are preserved.

Typography follows the official CSS stacks: Syne / sans-serif headings, DM Sans / sans-serif body, and Space Mono / monospace utility text, loaded from Google Fonts without committing font binaries. Controls use 6px/12px corners and cards 20px corners. `src/brand.css` applies the brand treatment without replacing existing layouts, motion or responsive breakpoints. `public/ict-logo.png` is the unchanged official https://infinitecodetech.com/logo.png asset, used as the base-aware favicon. Header and footer use text wordmarks; no new logo was invented.
