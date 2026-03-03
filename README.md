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
  data/              # Centralized data & constants
    site.ts          # Site config, social links, theme key, fonts URL
    navigation.ts    # Nav & footer links for all pages
    icons.ts         # Reusable SVG icons as string constants
    home.ts          # Homepage data (apps, values, marquee, contacts)
    app.ts           # App page data (features, marquee)
  components/        # Reusable Astro components
    Nav.astro        # Navigation bar with mobile menu
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
    index.astro      # Homepage
    app.astro        # App landing page template
    privacy.astro    # Privacy policy
    terms.astro      # Terms of service
  scripts/           # Client-side TypeScript
    nav.ts           # Scroll behavior + mobile menu
    carousel.ts      # Parameterized carousel logic
    theme-toggle.ts  # Theme switching
    animations.ts    # Scroll-triggered animations
  styles/            # Global CSS
    common.css       # Theme variables, nav, footer, base reset
    components.css   # Buttons, carousel, marquee, icon-card, animations
    index.css        # Homepage-specific styles
    app.css          # App page-specific styles
    legal.css        # Legal pages styles
public/
  img/               # Static images
```

## Path aliases

Configured in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@data/*` | `src/data/*` |
| `@styles/*` | `src/styles/*` |
| `@scripts/*` | `src/scripts/*` |

## Theme system

- Light/dark theme via `data-theme` attribute on `<html>`
- Inline script in `<head>` prevents FOUC
- Persisted in `localStorage` (`hi1-theme`)
- Single `[data-theme="dark"]` CSS block (no duplicate `@media` query)
