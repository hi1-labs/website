import { SITE, SOCIAL_LINKS } from './site';
import {
  ICON_SHIELD,
  ICON_STAR,
  ICON_HEART,
  ICON_PHONE,
  ICON_EMAIL,
  ICON_QUESTION,
  ICON_TWITTER,
  ICON_INSTAGRAM,
} from './icons';

/* ---- Hero marquee ---- */

export const heroMarqueeTags = [
  'Privacy First',
  'Cross-Platform',
  'No Ads',
  'Made with Love',
  'Quality Over Quantity',
  'Honest Software',
  'Beautiful Design',
  'Indie Studio',
];

/* ---- Apps ---- */

export const apps = [
  { href: '/app', icon: '\u{1F3AF}', title: 'App One', tagline: 'A short tagline describing what this app does.', badge: 'Coming Soon' },
  { href: '/app', icon: '\u2728', title: 'App Two', tagline: 'A short tagline describing what this app does.', badge: 'Coming Soon' },
  { icon: '\u{1F9E9}', title: 'App Three', tagline: 'A short tagline describing what this app does.', badge: 'In Development' },
  { icon: '\u{1F52E}', title: 'App Four', tagline: 'A short tagline describing what this app does.', badge: 'In Development' },
];

/* ---- Values ---- */

export const values = [
  {
    iconSvg: ICON_SHIELD,
    title: 'Privacy First',
    description: 'Your data belongs to you — always has, always will',
    delay: '0.1s',
  },
  {
    iconSvg: ICON_STAR,
    title: 'Quality Over Quantity',
    description: 'Fewer apps, more love — every detail carefully considered',
    delay: '0.15s',
  },
  {
    iconSvg: ICON_HEART,
    title: 'Honest Software',
    description: 'Transparent design, honest pricing, and interfaces that respect your choices',
    delay: '0.2s',
  },
  {
    iconSvg: ICON_PHONE,
    title: 'Cross-Platform',
    description: 'Beautifully native on both iOS and Android',
    delay: '0.25s',
  },
];

/* ---- Contact links ---- */

export const contactLinksData = [
  {
    iconSvg: ICON_EMAIL,
    href: `mailto:${SITE.email}`,
    label: SITE.email,
  },
  {
    iconSvg: ICON_QUESTION,
    href: `mailto:${SITE.supportEmail}`,
    label: SITE.supportEmail,
  },
];

/* ---- Social links ---- */

export const socialLinksData = [
  {
    iconSvg: ICON_TWITTER,
    href: SOCIAL_LINKS.twitter,
    ariaLabel: 'Follow us on X (Twitter)',
  },
  {
    iconSvg: ICON_INSTAGRAM,
    href: SOCIAL_LINKS.instagram,
    ariaLabel: 'Follow us on Instagram',
  },
];
