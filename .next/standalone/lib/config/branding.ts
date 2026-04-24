/**
 * Branding Configuration
 * Uses environment variables for easy customization
 * 
 * Uses a safe accessor for process.env to prevent crashes in client-side bundles
 * where `process` may be undefined at runtime.
 */

function getEnv(name: string): string | undefined {
  if (typeof process === 'undefined' || !process.env) return undefined;
  return process.env[name];
}

export const BRANDING = {
  // App identity
  name: getEnv('NEXT_PUBLIC_APP_NAME') || 'LuxUp AI Tutor',
  tagline: getEnv('NEXT_PUBLIC_APP_TAGLINE') || 'Lighting the Path to Knowledge',
  company: getEnv('NEXT_PUBLIC_APP_COMPANY') || 'LuxUp Training',
  description: getEnv('NEXT_PUBLIC_APP_DESCRIPTION') || 'AI-powered personalized education platform',
  
  // URLs
  url: getEnv('NEXT_PUBLIC_APP_URL') || 'https://aitutor.luxuptraining.com',
  
  // Colors (can be overridden via env)
  colors: {
    primary: getEnv('NEXT_PUBLIC_BRAND_COLOR_PRIMARY') || '#D4AF37',
    secondary: getEnv('NEXT_PUBLIC_BRAND_COLOR_SECONDARY') || '#1E3A5F',
    accent: getEnv('NEXT_PUBLIC_BRAND_COLOR_ACCENT') || '#4A90E2',
  },
} as const;

export type BrandingConfig = typeof BRANDING;
