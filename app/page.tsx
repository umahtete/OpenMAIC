'use client';

import { motion } from 'motion/react';
import { Brain, Clock, User, BarChart3 } from 'lucide-react';
import { HeroSection } from '@/components/home/hero-section';
import { FeatureCard } from '@/components/home/feature-card';
import { AboutSection } from '@/components/home/about-section';
import { CTASection } from '@/components/home/cta-section';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Brain />,
    title: 'AI-Powered',
    description: 'Intelligent tutoring that adapts to your unique learning style, providing personalized guidance and real-time feedback.'
  },
  {
    icon: <Clock />,
    title: 'Always Available',
    description: '24/7 access to learning resources and AI assistance. Learn at your own pace, whenever and wherever you want.'
  },
  {
    icon: <User />,
    title: 'Personalized Learning',
    description: 'Adaptive lessons that meet you where you are. Our AI understands your strengths and helps you improve.'
  },
  {
    icon: <BarChart3 />,
    title: 'Progress Tracking',
    description: 'Real-time insights into your development. Track your achievements and see how far you have come.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Why Choose </span>
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#1E3A5F] bg-clip-text text-transparent">
                LuxUp AI Tutor?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with our cutting-edge AI platform designed to accelerate your learning journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      
      <CTASection />

      <footer className="py-8 border-t border-border/50 bg-gradient-to-b from-transparent to-[#1E3A5F]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-horizontal.png"
                alt="LuxUp AI Tutor"
                className="h-8"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LuxUp Training. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
