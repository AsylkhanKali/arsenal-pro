@AGENTS.md

# Arsenal Pro Group — site guide

Single-page multilingual "визитка" (brochure) site for **ТОО «Арсенал про Групп»**
(Arsenal Pro Group LLP), a Kazakhstan defense **supplier** serving government agencies.
No products or prices are shown; the site exists to build credibility.

**Positioning is a hard constraint: the company supplies, it does not manufacture.**
Copy must never claim development, production, repair, modernization or a "full cycle"
(«полный цикл») — that over-claim was scrubbed from all 5 locales on the owner's
instruction. Frame everything as sourcing from vetted manufacturers, logistics and
turnkey delivery. Four supply categories only: small arms, ammunition, tactical
gear/body armor, optics — armored vehicles/tanks and K9 were deliberately removed,
so don't reintroduce them.

Deployed via Vercel to **arsenal-pro.kz**. Pushes to `origin/main` auto-deploy — treat
`main` as production. The owner has given **standing authorization to merge**: once the
work is verified, push the branch, open a PR and merge it without asking. The
authorization covers skipping the question, not skipping the verification below.

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

## Page structure

All sections live in `src/app/[lang]/page.tsx`, in order: hero → trust band → `#about`
→ `#categories` → `#process` → `#why` → `#audience` → `#contacts`. Nav (header, footer,
and the `links` prop passed down to `mobile-nav`) lists only About / Categories /
Contacts.

Section **shapes are deliberately varied** — the page previously read as one card grid
repeated six times. Keep them distinct when editing: `#categories` alternates wide and
narrow cards (`categorySpan`), `#process` is a numbered timeline beside a photo column,
`#why` is a hairline-ruled list (no boxes), `#audience` is flowing chips.

A full-bleed "statement band" between About and Categories was tried twice (photo, then
typographic) and **removed on the owner's request both times** — it read as an empty
slab. Don't add it back.

### Layout gotcha

Card photos need a **definite** height or `h-full` collapses to the image's intrinsic
size and blows out the row. In `#categories` the wrapper carries `h-full min-h-[…]`
and the `<img>` is `absolute inset-0 h-full w-full object-cover`, so wide and narrow
cards in a row share one height. Same reason `#process` uses a stretched photo column
instead of a fixed `aspect-[…]`: it matches the text column's height with no dead space.

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
via `.photo-tone` to match the palette: `hero`, `about`, `process`, and four `cat-*`
category shots. See `public/images/CREDITS.md` for the subject/section mapping and
source ids — replace with owned/licensed photography before serious promotion, keeping
the same filenames so nothing else needs to change.
`public/camo.svg` is a generated tileable camo texture used in `.field-backdrop`.

When swapping a photo, match the slot's ratio and keep the subject clear of the frame
edges — `about.jpg` (4:3) was replaced once because the original had the subject's head
jammed against the top edge, which read as a cropping bug. Prefer **dark, low-key**
sources; bright washed-out stock fights the palette even after `.photo-tone`.
`process.jpg` is 4:5 portrait and sits in a column that stretches to the text height,
so a dark, horizontally-centred subject there crops safely at any tall ratio.

## SEO

`src/app/robots.ts` and `src/app/sitemap.ts` emit all 5 locale URLs with hreflang
alternates. Per-locale `<title>`/description/OG/JSON-LD (`Organization`) come from
`generateMetadata` in `src/app/[lang]/layout.tsx`, sourced from `i18n.ts` + `company.ts`.

## Verification

`npm run build` should prerender all 5 locales with zero type/lint errors (Next
prints a route tree — check `/ru /kz /en /tr /zh` all appear under `/[lang]`).
For visual changes, run `npm run dev` and check at least `/ru` and one non-Cyrillic,
non-Latin locale (`/zh`) at both mobile (375px) and desktop widths.
