import { defaultLocale, type Locale } from './types';
export { type Locale, defaultLocale, from './types';

import {
  commonZhCN, commonEnUS, commonSwKE, commonFrFR, commonArSA,
  commonPtBR, commonHiIN, commonDeDE, commonItIT
} from './common';
import { stageZhCN, stageEnUS } from './stage';
import { chatZhCN, chatEnUS } from './chat';
import { generationZhCN, generationEnUS } from './generation';
import { settingsZhCN, settingsEnUS } from './settings';

export const translations = {
  'zh-CN': {
    ...commonZhCN,
    ...stageZhCN,
    ...chatZhCN,
    ...generationZhCN,
    ...settingsZhCN,
  },
  'en-US': {
    ...commonEnUS,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // Swahili (Kenya)
  'sw-KE': {
    ...commonSwKE,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // French (France)
  'fr-FR': {
    ...commonFrFR,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // Arabic (Saudi Arabia)
  'ar-SA': {
    ...commonArSA,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // Portuguese (Brazil)
  'pt-BR': {
    ...commonPtBR,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // Hindi (India)
  'hi-IN': {
    ...commonHiIN,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // German (Germany)
  'de-DE': {
    ...commonDeDE,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
  // Italian (Italy)
  'it-IT': {
    ...commonItIT,
    ...stageEnUS,
    ...chatEnUS,
    ...generationEnUS,
    ...settingsEnUS,
  },
} as const;

export type TranslationKey = keyof (typeof translations)[typeof defaultLocale];

export function translate(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  
  // Fallback to English if locale not found
  if (!value) {
    value = translations['en-US'];
  }
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  return (typeof value === 'string' ? value : undefined) ?? key;
}

export function getClientTranslation(key: string): string {
  let locale: Locale = defaultLocale;

  if (typeof window !== 'undefined') {
    try {
      const storedLocale = localStorage.getItem('locale');
      const validLocales: Locale[] = [
        'zh-CN', 'en-US', 'sw-KE', 'fr-FR', 'ar-SA', 'pt-BR', 'hi-IN', 'de-DE', 'it-IT'
      ];
      if (storedLocale && validLocales.includes(storedLocale as Locale)) {
        locale = storedLocale as Locale;
      }
    } catch {
      // localStorage unavailable, keep default locale
    }
  }

  return translate(locale, key);
}
