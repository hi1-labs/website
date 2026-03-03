import { SITE } from './site';

export interface NavLink {
  label: string;
  href: string;
}

/* ---- Main page (index) ---- */

export const mainNavLinks: NavLink[] = [
  { label: 'Apps', href: '#apps' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const mainFooterLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: `mailto:${SITE.email}` },
];

/* ---- App page ---- */

export const appNavLinks: NavLink[] = [
  { label: 'All Apps', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Support', href: '#support' },
];

export const appFooterLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

/* ---- Legal pages (privacy, terms) ---- */

export const legalNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
];

export const legalFooterLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: `mailto:${SITE.email}` },
];
