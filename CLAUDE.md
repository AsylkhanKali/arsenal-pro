@AGENTS.md

# Arsenal Pro Group — site guide

Single-page multilingual "визитка" (brochure) site for **ТОО «Арсенал про Групп»**
(Arsenal Pro Group LLP), a Kazakhstan defense supplier serving government agencies
(armaments, ammunition, armored vehicles, tactical gear, K9, optics — full cycle).
No products or prices are shown; the site exists to build credibility.

Deployed via Vercel to **arsenal-pro.kz**. Pushes to `origin/main` auto-deploy — treat
`main` as production; work on a branch and get explicit go-ahead before merging.

## Stack

Next.js 16 (App Router) / React 19 / TypeScript / Tailwind v4 (CSS-first `@theme`,
no `tailwind.config.js`). See `AGENTS.md` above — Next 16 renamed `middleware` to
**`proxy`** (`src/proxy.ts`), among other breaking changes; check
`node_modules/next/dist/docs/` before assuming an older-Next API.

`next.config.ts` sets `output: "standalone"` (Docker) and pins `turbopack.root` (a
stray lockfile in a parent directory can otherwise be mis-detected as the workspace
root).

## Routing & i18n

- `src/app/[lang]/layout.tsx` is the **root layout** (there is no `app/layout.tsx` —
  Next allows the root layout under a dynamic segment; see the App Router docs).
- `src/proxy.ts` redirects `/` → `/ru` (the default locale).
- 5 locales: `ru` (default), `kz`, `en`, `tr`, `zh` — defined in `src/app/i18n.ts`.
  `localeToBcp47` maps `kz` → `kk` for `<html lang>` / hreflang; everything else is
  identity. Chinese has no bundled webfont — it falls back to the visitor's system
  CJK font (see the `--font-display`/`--font-body` fallback stack in `globals.css`).
- All UI copy lives in `src/app/i18n.ts` (`Translations` interface + one object per
  locale). Add new copy there, not inline in components.
- Real business data (BIN, director, phone, email, address, Google Maps embed) is
  centralized in `src/app/company.ts`. **Do not replace with placeholders** — it's
  the company's actual registration info.

## Design system

Camo/field theme: deep olive-black base, khaki/sand accents, tactical-orange CTA
signal. Tokens live in `src/app/globals.css` under `@theme` (`--color-field-*`,
`--color-sand`, `--color-signal`, etc.) plus utility classes: `.eyebrow`,
`.display-title`, `.photo-tone` / `.photo-tone-wrap` (unifies stock photos into the
palette), `.corner-frame` (tactical bracket hover effect), `.panel`, `.hairline-grid`,
`.reveal` (scroll-in animation, gated behind `@media (scripting: enabled)` so
no-JS/crawlers always see full content — don't reintroduce a JS-toggled class for
this, it breaks SSR hydration).

Fonts: Oswald (display, condensed/uppercase) + Manrope (body) via `next/font/google`,
Latin+Cyrillic subsets (covers ru/kz/en/tr).

## Components

`src/components/`: `site-header.tsx` (desktop nav + logo), `mobile-nav.tsx` (client;
**portals its overlay to `document.body`** — the header's `backdrop-blur` makes it a
`position: fixed` containing block, so a non-portalled overlay gets trapped inside
the 64px header bar), `language-switcher.tsx`, `reveal.tsx` (client, IntersectionObserver
+ mount-time visibility check + timeout fallback so content never gets stuck
invisible), `site-footer.tsx`, `icons.tsx` (bespoke inline SVG icon set — no icon
library dependency).

## Images

`public/images/*.jpg` are **Pexels placeholders** (free commercial license), tone-treated
via `.photo-tone` to match the palette. See `public/images/CREDITS.md` for the
subject/section mapping — replace with owned/licensed photography before serious
promotion, keeping the same filenames so nothing else needs to change.
`public/camo.svg` is a generated tileable camo texture used in `.field-backdrop`.

## SEO

`src/app/robots.ts` and `src/app/sitemap.ts` emit all 5 locale URLs with hreflang
alternates. Per-locale `<title>`/description/OG/JSON-LD (`Organization`) come from
`generateMetadata` in `src/app/[lang]/layout.tsx`, sourced from `i18n.ts` + `company.ts`.

## Verification

`npm run build` should prerender all 5 locales with zero type/lint errors (Next
prints a route tree — check `/ru /kz /en /tr /zh` all appear under `/[lang]`).
For visual changes, run `npm run dev` and check at least `/ru` and one non-Cyrillic,
non-Latin locale (`/zh`) at both mobile (375px) and desktop widths.
