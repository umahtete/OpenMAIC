'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/5 via-transparent to-[#D4AF37]/5" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#1E3A5F]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <div className={cn(
            'inline-flex items-center gap-2 px-4 py-2 rounded-full',
            'bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20',
            'border border-[#D4AF37]/20 dark:border-[#D4AF37]/30',
            'text-sm font-medium text-[#1E3A5F] dark:text-[#D4AF37]'
          )}>
            <Sparkles className="h-4 w-4" />
            <span>Powered by Advanced AI</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <img
            src="/logo-horizontal.png"
            alt="LuxUp AI Tutor"
            className="h-16 md:h-20 lg:h-24 mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-[#1E3A5F] via-[#D4AF37] to-[#1E3A5F] bg-clip-text text-transparent">
            Lighting the Path
          </span>
          <br />
          <span className="text-foreground">to Knowledge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience personalized AI-powered tutoring that adapts to your unique learning style. 
          Unlock your potential with intelligent guidance available anytime, anywhere.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className={cn(
              'h-12 px-8 text-base font-semibold rounded-xl',
              'bg-gradient-to-r from-[#D4AF37] to-[#B8960F]',
              'hover:from-[#B8960F] hover:to-[#9A7D0D]',
              'text-white shadow-lg shadow-[#D4AF37]/25',
              'hover:shadow-xl hover:shadow-[#D4AF37]/30',
              'transition-all duration-300',
              'group'
            )}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className={cn(
              'h-12 px-8 text-base font-semibold rounded-xl',
              'border-[#1E3A5F]/30 dark:border-[#1E3A5F]/50',
              'text-[#1E3A5F] dark:text-[#D4AF37]',
              'hover:bg-[#1E3A5F]/5 dark:hover:bg-[#D4AF37]/10',
              'hover:border-[#1E3A5F]/50 dark:hover:border-[#D4AF37]/50',
              'transition-all duration-300'
            )}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#1E3A5F]" />
            <span>Free trial available</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
