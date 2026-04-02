/**
 * Brand Configuration for LuxUp AI Tutor
 */
export const BRANDING = {
  name: 'LuxUp AI Tutor',
  tagline: 'Lighting the Path to Knowledge',
  company: 'LuxUp Training',
  description: 'AI-powered personalized education platform',
  features: {
    aiPowered: {
      title: 'AI-Powered',
      description: 'Intelligent tutoring that adapts to you',
    },
    alwaysAvailable: {
      title: 'Always Available',
      description: '24/7 access to learning',
    },
    personalizedLearning: {
      title: 'Personalized Learning',
      description: 'Adaptive lessons that meet you where you are',
    },
    progressTracking: {
      title: 'Progress Tracking',
      description: 'Real-time insights into your development',
    },
  },
  colors: {
    primary: '#D4AF37', // Lux Gold
    secondary: '#1E3A5F', // Deep Navy
    accent: '#4A90E2', // Sky Blue
    background: '#FAFAF8', // Warm White
    text: '#333333',
  },
  social: {
    twitter: '@luxuptraining',
    linkedin: '/company/luxuptraining',
  },
} as const;

export type BrandConfig = typeof BRANDING;
