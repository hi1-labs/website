# hi1 labs website

Website for [hi1 labs](https://hi1labs.com) — an independent app studio crafting thoughtful mobile experiences.

## Tech stack

- [Astro](https://astro.build/) 5.x (static output, zero client JS by default)
- TypeScript (strict mode)
- Vanilla CSS with custom properties (light/dark theme)
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) fonts
- Deployed on Cloudflare Pages

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview   # preview built site
```

## Project structure

```
src/
  i18n/              # Internationalization
    config.ts        # Supported locales (en, ru, kk, es, pt)
    utils.ts         # Translation helpers (getCommonTranslations, getHomeTranslations, etc.)
    en/              # English translations
    ru/              # Russian translations
    kk/              # Kazakh translations
    es/              # Spanish translations
    pt/              # Portuguese translations
  data/              # Centralized data & constants
    site.ts          # Site config, social links, theme/lang keys, fonts URL
    icons.ts         # Reusable SVG icons as string constants
  components/        # Reusable Astro components
    Nav.astro        # Navigation bar with mobile menu & language switcher
    Footer.astro     # Footer with dynamic copyright year
    Carousel.astro   # Generic carousel with slots
    IconCard.astro   # Unified card (values + features via variant prop)
    Marquee.astro    # Infinite scrolling tag marquee
    SectionHeader.astro
    AppCard.astro
    ContactLinks.astro
    SocialLinks.astro
    StoreBadges.astro
    ThemeToggle.astro
  layouts/
    BaseLayout.astro # Single layout with variant prop (default | legal)
  pages/
    index.astro      # Root redirect (auto-detects language)
    404.astro        # Multilingual 404 page
    [lang]/
      index.astro    # Homepage
      app.astro      # App landing page
      privacy.astro  # Privacy policy
      terms.astro    # Terms of service
  scripts/           # Client-side TypeScript
    nav.ts           # Scroll behavior + mobile menu + language persistence
    carousel.ts      # Parameterized carousel logic with AbortController cleanup
    theme-toggle.ts  # Theme switching
    animations.ts    # Scroll-triggered animations (loaded only on non-legal pages)
  styles/            # Global CSS
    common.css       # Theme variables, nav, footer, base reset
    components.css   # Buttons, carousel, marquee, icon-card, animations
    index.css        # Homepage-specific styles
    app.css          # App page-specific styles
    legal.css        # Legal pages styles
functions/
  index.ts           # Cloudflare Pages edge function (Accept-Language redirect)
public/
  background/        # Hero background images (jpg + webp)
  img/               # App icons and static images
```

## Internationalization

5 supported locales: `en`, `ru`, `kk`, `es`, `pt`

- Translations live in `src/i18n/{locale}/` with typed interfaces
- On Cloudflare: edge function (`functions/index.ts`) redirects `/` based on `Accept-Language`
- In dev: client-side redirect based on `localStorage` → `navigator.language`
- Language choice persisted in `localStorage` (`hi1-lang`)
- All pages, including 404, support all 5 languages

## Path aliases

Configured in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@data/*` | `src/data/*` |
| `@styles/*` | `src/styles/*` |
| `@scripts/*` | `src/scripts/*` |
| `@i18n/*` | `src/i18n/*` |

## Theme system

- Light/dark theme via `data-theme` attribute on `<html>`
- Inline script in `<head>` prevents FOUC
- Persisted in `localStorage` (`hi1-theme`)
- Single `[data-theme="dark"]` CSS block (no duplicate `@media` query)

## Deployment

- **Platform:** Cloudflare Pages
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Edge function:** `functions/index.ts` handles root locale redirect
