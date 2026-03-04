import type { Locale } from './config';
import { LOCALES } from './config';
import type { CommonTranslations, HomeTranslations, AppTranslations, LegalTranslations } from './types';

import { common as enCommon } from './en/common';
import { home as enHome } from './en/home';
import { app as enApp } from './en/app';
import { legal as enLegal } from './en/legal';

import { common as ruCommon } from './ru/common';
import { home as ruHome } from './ru/home';
import { app as ruApp } from './ru/app';
import { legal as ruLegal } from './ru/legal';

import { common as kkCommon } from './kk/common';
import { home as kkHome } from './kk/home';
import { app as kkApp } from './kk/app';
import { legal as kkLegal } from './kk/legal';

import { common as esCommon } from './es/common';
import { home as esHome } from './es/home';
import { app as esApp } from './es/app';
import { legal as esLegal } from './es/legal';

import { common as ptCommon } from './pt/common';
import { home as ptHome } from './pt/home';
import { app as ptApp } from './pt/app';
import { legal as ptLegal } from './pt/legal';

const commonMap: Record<Locale, CommonTranslations> = { en: enCommon, ru: ruCommon, kk: kkCommon, es: esCommon, pt: ptCommon };
const homeMap: Record<Locale, HomeTranslations> = { en: enHome, ru: ruHome, kk: kkHome, es: esHome, pt: ptHome };
const appMap: Record<Locale, AppTranslations> = { en: enApp, ru: ruApp, kk: kkApp, es: esApp, pt: ptApp };
const legalMap: Record<Locale, LegalTranslations> = { en: enLegal, ru: ruLegal, kk: kkLegal, es: esLegal, pt: ptLegal };

export function getCommonTranslations(locale: Locale): CommonTranslations {
  return commonMap[locale];
}

export function getHomeTranslations(locale: Locale): HomeTranslations {
  return homeMap[locale];
}

export function getAppTranslations(locale: Locale): AppTranslations {
  return appMap[locale];
}

export function getLegalTranslations(locale: Locale): LegalTranslations {
  return legalMap[locale];
}

const LOCALE_PATTERN = LOCALES.join('|');
const LOCALE_REGEX = new RegExp(`^\\/(${LOCALE_PATTERN})`);

export function stripLocalePrefix(path: string): string {
  return path.replace(LOCALE_REGEX, '');
}

export function getLocalizedPath(currentPath: string, targetLocale: Locale): string {
  const stripped = stripLocalePrefix(currentPath);
  return `/${targetLocale}${stripped || '/'}`;
}

export function getOtherLocales(current: Locale): Locale[] {
  return LOCALES.filter((l) => l !== current) as Locale[];
}

const OG_LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  kk: 'kk_KZ',
  es: 'es_ES',
  pt: 'pt_BR',
};

export function getOgLocale(locale: Locale): string {
  return OG_LOCALE_MAP[locale];
}
