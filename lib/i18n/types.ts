export type Locale = 
  | 'zh-CN'  // Simplified Chinese
  | 'en-US'  // English (US)
  | 'sw-KE'  // Swahili (Kenya)
  | 'fr-FR'  // French (France)
  | 'ar-SA'  // Arabic (Saudi Arabia)
  | 'pt-BR'  // Portuguese (Brazil)
  | 'hi-IN'  // Hindi (India)
  | 'de-DE'  // German (Germany)
  | 'it-IT'; // Italian (Italy)

export const defaultLocale: Locale = 'en-US';

export const LOCALE_NAMES: Record<Locale, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'sw-KE': 'Kiswahili',
  'fr-FR': 'Français',
  'ar-SA': 'العربية',
  'pt-BR': 'Português',
  'hi-IN': 'हिन्दी',
  'de-DE': 'Deutsch',
  'it-IT': 'Italiano',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  'zh-CN': '🇨🇳',
  'en-US': '🇺🇸',
  'sw-KE': '🇰🇪',
  'fr-FR': '🇫🇷',
  'ar-SA': '🇸🇦',
  'pt-BR': '🇧🇷',
  'hi-IN': '🇮🇳',
  'de-DE': '🇩🇪',
  'it-IT': '🇮🇹',
};
