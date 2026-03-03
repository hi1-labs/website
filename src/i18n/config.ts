export const LOCALES = ['en', 'ru', 'kk', 'es', 'pt'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isValidLocale(lang: string): lang is Locale {
  return LOCALES.includes(lang as Locale);
}
