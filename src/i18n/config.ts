export const LOCALES = ['en', 'ru', 'kk', 'es', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LANG_CONFIG: Record<Locale, { flag: string; label: string }> = {
  en: { flag: '🇺🇸', label: 'EN' },
  ru: { flag: '🇷🇺', label: 'RU' },
  kk: { flag: '🇰🇿', label: 'KK' },
  es: { flag: '🇪🇸', label: 'ES' },
  pt: { flag: '🇧🇷', label: 'PT' },
};
