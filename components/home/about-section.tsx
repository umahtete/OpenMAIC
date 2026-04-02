'use client';

import { BRANDING } from '@/lib/config/branding';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          About {BRANDING.company}
        </h2>
        
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
          {BRANDING.name} combines cutting-edge artificial intelligence with timeless wisdom. 
          Our platform provides personalized, faith-centered education for students of all ages.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To illuminate minds with knowledge and guide hearts toward truth, 
              equipping learners to excel academically while growing spiritually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
