'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Locale, defaultLocale } from '@/lib/i18n/types';
import { translate } from '@/lib/i18n/index';

const LOCALE_STORAGE_KEY = 'locale';

// All supported locales
const ALL_LOCALES: Locale[] = [
  'zh-CN', 'en-US', 'sw-KE', 'fr-FR', 'ar-SA', 'pt-BR', 'hi-IN', 'de-DE', 'it-IT'
];

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [localeState, setLocaleState] = useState<Locale>(() => {
    // Try to get stored locale on first render
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored && ALL_LOCALES.includes(stored as Locale)) {
        return stored as Locale;
      }
    }
    return defaultLocale;
  });

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored && ALL_LOCALES.includes(stored as Locale)) {
        setLocaleState(stored as Locale);
        return;
      }
      // Enhanced browser language detection
      const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
      const detected = detectLocale(browserLang);
      localStorage.setItem(LOCALE_STORAGE_KEY, detected);
      setLocaleState(detected);
    } catch {
      // localStorage unavailable, keep default
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  };

  const t = (key: string): string => translate(localeState, key);

  return (
    <I18nContext.Provider value={{ locale: localeState, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Detect the best matching locale from browser language
 */
function detectLocale(browserLang: string): Locale {
  const lang = browserLang.toLowerCase();
  
  // Direct matches
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('en')) return 'en-US';
  if (lang.startsWith('sw')) return 'sw-KE';
  if (lang.startsWith('fr')) return 'fr-FR';
  if (lang.startsWith('ar')) return 'ar-SA';
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('hi')) return 'hi-IN';
  if (lang.startsWith('de')) return 'de-DE';
  if (lang.startsWith('it')) return 'it-IT';
  
  // Default to English
  return defaultLocale;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
