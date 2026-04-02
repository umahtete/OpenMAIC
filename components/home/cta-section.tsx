'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#1E3A5F]/95 to-[#0F1F33]" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '12s' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '15s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 mb-8">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-sm font-medium text-[#D4AF37]">Start Your Journey Today</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Learning?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join thousands of learners who have already discovered the power of AI-driven education. 
          Your personalized learning journey awaits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className={cn(
              'h-14 px-10 text-base font-semibold rounded-xl',
              'bg-gradient-to-r from-[#D4AF37] to-[#B8960F]',
              'hover:from-[#B8960F] hover:to-[#9A7D0D]',
              'text-[#1E3A5F] shadow-lg shadow-[#D4AF37]/30',
              'hover:shadow-xl hover:shadow-[#D4AF37]/40',
              'transition-all duration-300',
              'group'
            )}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className={cn(
              'h-14 px-10 text-base font-semibold rounded-xl',
              'border-white/30 text-white',
              'hover:bg-white/10 hover:border-white/50',
              'transition-all duration-300'
            )}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#D4AF37]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#D4AF37]" />
            <span>Free trial available</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#D4AF37]" />
            <span>24/7 support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
