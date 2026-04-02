'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-[#1e3a5f] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students already experiencing personalized, AI-powered education.
        </p>
        
        <Link 
          href="/get-started"
          className="inline-block px-8 py-3 bg-white text-[#1e3a5f] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
