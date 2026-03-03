# Astro + TypeScript Static Website Guidelines

## Tech Stack

- Framework: Astro 5.x (static output)
- Language: TypeScript (strict mode)
- Styling: Vanilla CSS with CSS custom properties (theme system)
- Fonts: Inter (body) + JetBrains Mono (code/labels)
- Hosting: Cloudflare Pages
- Package Manager: npm

## Architecture

- Static site generator with zero client-side JS by default
- Components as `.astro` files with typed Props interfaces
- Layouts wrap pages; components are reusable UI blocks
- Client-side scripts only where interactivity is needed (`<script>` tags)

```
src/
  components/      # Reusable Astro components (Nav, Footer, Carousel, cards, etc.)
  layouts/         # Page layouts (BaseLayout, LegalLayout)
  pages/           # File-based routing (index, app, privacy, terms)
  scripts/         # Client-side TypeScript (theme, menu, carousel, animations)
  styles/          # Global CSS (theme vars, components, page-specific)
public/
  img/             # Static images (hero backgrounds)
```

## Development Commands

- Dev server: `npm run dev` (port 4321)
- Build: `npm run build` (output: `dist/`)
- Preview: `npm run preview`

## Code Style

- File naming: PascalCase for `.astro` components, kebab-case for scripts and styles.
- Use `interface Props` in every component's frontmatter.
- Pass SVG icons as `string` props with `set:html` for rendering.
- Use CSS custom properties (`--var-name`) for theming, not hardcoded values.
- No inline styles except for CSS custom property overrides (`--delay`).
- Prefer global CSS files over scoped `<style>` in components (existing pattern).

## Theme System

- Light/dark theme via `data-theme` attribute on `<html>`.
- Theme persisted in `localStorage` key `hi1-theme`.
- Inline script in `<head>` prevents FOUC (set in BaseLayout).
- CSS variables switch via `:root`, `@media (prefers-color-scheme: dark)`, and `[data-theme="dark"]`.

## Component Conventions

- Every component has typed `Props` interface.
- SVG-heavy content passed as `string` props and rendered with `<Fragment set:html={...} />`.
- Animations use `animate-on-scroll` class + `--delay` CSS variable.
- Carousel logic is unified in `src/scripts/carousel.ts` — parameterized by selectors.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- No server-side rendering; pure static output.

## Claude CLI Specifics

- Before finishing a task, run: `npm run build` to verify no errors.
- If new pages are added, verify they appear in build output (`dist/`).
- When modifying components, check all pages that use them.
- The two carousel instances (apps, screenshots) share one script — test both after changes.
