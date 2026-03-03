export const SITE = {
  name: 'hi1 labs',
  url: 'https://hi1labs.com',
  email: 'hello@hi1labs.com',
  supportEmail: 'support@hi1labs.com',
  privacyEmail: 'privacy@hi1labs.com',
  year: new Date().getFullYear(),
} as const;

export const SEO = {
  defaultOgImage: `${SITE.url}/og-default.png`,
  twitterHandle: '@hi1labs',
  locale: 'en_US',
  themeColor: '#007AFF',
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/hi1labs',
  instagram: 'https://instagram.com/hi1labs',
} as const;

export const THEME_STORAGE_KEY = 'hi1-theme';
export const SCROLL_THRESHOLD = 16;

// Cloudflare Web Analytics — public site token (visible in HTML source, not a secret)
export const CF_ANALYTICS_TOKEN = 'YOUR_CF_ANALYTICS_TOKEN';

export const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap';
