# hi1 labs website

Website for [hi1 labs](https://hi1labs.com) — an independent app studio crafting thoughtful mobile experiences.

## Structure

```
css/
  common.css       — shared styles: theme, nav, footer, base
  components.css   — sections, buttons, scroll animations
  index.css        — homepage: hero, about, contact
  app.css          — app landing page template
  legal.css        — terms & privacy pages
js/
  common.js        — theme toggle, mobile menu
  animations.js    — scroll-triggered animations
  screenshots.js   — screenshot carousel navigation
index.html         — homepage
app.html           — app landing page template
terms.html         — terms of service template
privacy.html       — privacy policy template
```

## Tech stack

- Vanilla HTML, CSS, JS (no build tools, no frameworks)
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) fonts
- Light/dark theme with system preference detection
- Deployed on Cloudflare Pages
