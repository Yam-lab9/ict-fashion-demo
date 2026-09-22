# Infinite Code Tech — Fashion E-commerce Demo

Original fashion prototype rebranded for Infinite Code Tech (ICT). Text wordmarks and a text-only ICT favicon are used; neither is represented as an official logo.

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

The existing GitHub Pages base `/Zuhoor_web_prototype/` is intentionally retained in `vite.config.js` so publishing to the same repository does not break. This is the only retained original-brand identifier. The existing `predeploy` / `deploy` commands are preserved; `npm run deploy` requires your authorized Git remote. Nothing has been pushed or deployed.

For a different host at its domain root, build with `npm run build -- --base=/`. For a different subdirectory supply that path with `--base`. The favicon uses Vite's BASE_URL so it follows deployment configuration.

## Demo scope

Client-side React 19 / Vite 8 app. Catalog, cart, coupons, orders and admin edits use in-memory state and reset on reload. No backend, admin authentication, payment processing, actual order placement or contact delivery is implemented. Existing unfinished controls remain as supplied. ICT10 replaces the original branded coupon.

No verified ICT contact details were supplied. Contact placeholders preserve the UI. Wholesale, customization and admin messaging actions show a demo notice instead of opening unverified destinations. Social buttons retain their original placeholder behavior. Reviews, statistics, prices, delivery policies, catalog descriptions and sample orders are demo content, not claims about ICT's real business. No products, product swatch colors, product layouts or commerce logic were changed.

Original third-party image URLs and Google Fonts are retained. They require internet access; image licensing, availability and embedded watermarks have not been verified. The uploaded source does not contain those remote image files.

## Branding

Navy #0B1E38, Slate Navy #1E3A5F, Slate Dark #475569, Olive #4B602D, Gold #BF9B30, Canvas #F8FAF6 / #F8F9FA. Gold surfaces use navy text for readability; selected light-surface accent text uses olive. Existing fonts, spacing, animation rules and responsive breakpoints are retained.
