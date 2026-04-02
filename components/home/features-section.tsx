'use client';

import { BRANDING } from '@/lib/config/branding';

export default function FeaturesSection() {
  const features = Object.entries(BRANDING.features);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose {BRANDING.name}?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map(([key, feature]) => (
            <div 
              key={key}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
