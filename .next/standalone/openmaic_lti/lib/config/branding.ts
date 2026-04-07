/**
 * Branding Configuration
 * Uses environment variables for easy customization
 */

export const BRANDING = {
  // App identity
  name: process.env.NEXT_PUBLIC_APP_NAME || 'LuxUp AI Tutor',
  tagline: process.env.NEXT_PUBLIC_APP_TAGLINE || 'Lighting the Path to Knowledge',
  company: process.env.NEXT_PUBLIC_APP_COMPANY || 'LuxUp Training',
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'AI-powered personalized education platform',
  
  // URLs
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://aitutor.luxuptraining.com',
  
  // Colors (can be overridden via env)
  colors: {
    primary: process.env.NEXT_PUBLIC_BRAND_COLOR_PRIMARY || '#D4AF37',
    secondary: process.env.NEXT_PUBLIC_BRAND_COLOR_SECONDARY || '#1E3A5F',
    accent: process.env.NEXT_PUBLIC_BRAND_COLOR_ACCENT || '#4A90E2',
  },
} as const;

export type BrandingConfig = typeof BRANDING;
