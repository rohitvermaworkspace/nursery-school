# LittleSprouts Kindergarten — Next.js + Tailwind

A kindergarten/preschool marketing site built with Next.js (App Router) and
Tailwind CSS v4, inspired by the reference design you shared — same layout
structure, same rainbow color-coded navigation, same section flow, and the
same kind of warm, playful photography.

## Why not a pixel clone?

Rather than copying the reference's exact brand name and licensed
photography, this rebuilds the **visual system** — palette (sampled
directly from your screenshot), the colorful pill navigation, the section
layout, and the hand-drawn doodle style — under an original brand
("LittleSprouts") with free Unsplash photography, so it's fully yours to
use and extend.

## Tech stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Lucide React (icons)
- `next/image` for optimized, responsive images
- Built-in SEO: per-page metadata, Open Graph/Twitter cards, JSON-LD
  structured data, dynamic sitemap and robots.txt

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.js          Root layout — fonts, JSON-LD, Header/Footer wrapper
  page.js             Home page
  about/page.js        About page
  programs/page.js     Programs page (Play School / Pre-K / Kindergarten)
  classes/page.js       Class schedule page
  gallery/page.js       Photo gallery page
  blog/page.js           Blog & news listing
  contact/page.js         Contact page with working form
  sitemap.js               Dynamic sitemap.xml
  robots.js                 Dynamic robots.txt
  globals.css                 Design tokens (colors, fonts, animations)

components/
  Header.jsx            Top bar + colorful pill navigation
  Footer.jsx              Footer with grass illustration
  Hero.jsx                  Homepage hero
  ProgramCards.jsx           4 color-coded program cards
  CtaBanner.jsx                Admissions CTA banner
  WelcomeNews.jsx                Welcome + Latest News two-column section
  GalleryStrip.jsx                 "Captured Moments" photo strip
  PageHeader.jsx                    Reusable page-title banner for inner pages
  ContactForm.jsx                    Client-side contact form
  Doodles.jsx                         Hand-drawn SVG decorations (signature style)

data/content.js         All site content — nav links, programs, news, gallery
lib/seo.js                Site constants + buildMetadata() + JSON-LD helper
```

## Design tokens (sampled from the reference)

| Token | Hex | Use |
|---|---|---|
| `--color-purple` | `#6343cc` | Home nav pill, primary buttons |
| `--color-yellow` | `#eab42e` | About Us nav pill, accents |
| `--color-green` | `#77a735` | Programs nav pill, "Play School" card |
| `--color-teal` | `#5796af` | Classes nav pill |
| `--color-pink` | `#cd556f` | Gallery nav pill |
| `--color-orange` | `#dc6d35` | Blog nav pill, CTA accents |
| `--color-blue` | `#5076e1` | Contact nav pill |
| `--color-lavender` | `#ede9fa` | Hero & gallery section background |
| `--color-cream` | `#fdf8ea` | CTA banner, card backgrounds |
| `--color-green-deep` | `#6e8a3e` | Footer background |

**Type:** Baloo 2 (rounded, playful display font for headings/buttons) +
Nunito (body copy), loaded via a standard `<link>` tag in `app/layout.js`
rather than `next/font/google` — this keeps the build fully offline-safe
(no network access required at build time) while still loading the same
fonts in the browser at runtime.

**Signature element:** `components/Doodles.jsx` — a small hand-drawn SVG
system (rainbow, sun, stars, hearts, paper plane, butterflies, flowers,
trees) reused across every section, matching the reference's playful,
illustrated style.

## SEO setup

- Every page exports its own `metadata` via `buildMetadata()` in
  `lib/seo.js`, so titles, descriptions, canonical URLs, and Open
  Graph/Twitter tags stay consistent without repeating boilerplate.
- `app/layout.js` injects `ChildCare` JSON-LD structured data (schema.org)
  describing the business — name, address, phone, social profiles.
- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and
  `/robots.txt` automatically from the same route list.
- All images use `next/image` with descriptive, keyword-relevant `alt`
  text and responsive `sizes`.
- Before deploying, update `SITE.url` in `lib/seo.js` to your real domain,
  and add a real `og-image.png` (1200×630) to `/public`.

## Content

All copy, nav links, program details, news posts and gallery images live
in `data/content.js` and `lib/seo.js` — edit those two files to make the
whole site yours without touching component code.
