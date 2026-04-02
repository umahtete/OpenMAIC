'use client';

import { BRANDING } from '@/lib/config/branding';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#2d3a4f] to-[#4a5566]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          {BRANDING.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {BRANDING.tagline}
        </p>
        
        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
          {BRANDING.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/get-started"
            className="px-8 py-3 bg-white text-[#1e3a5f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
          <a 
            href="/learn-more"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
