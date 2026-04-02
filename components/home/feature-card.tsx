'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-2xl p-6 md:p-8',
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl',
        'border border-border/50 dark:border-border/30',
        'shadow-lg shadow-black/[0.03] dark:shadow-black/20',
        'hover:shadow-xl hover:shadow-[#D4AF37]/10 dark:hover:shadow-[#D4AF37]/5',
        'hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/20',
        'transition-all duration-500 ease-out'
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-[#1E3A5F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className={cn(
          'mb-5 flex h-14 w-14 items-center justify-center rounded-xl',
          'bg-gradient-to-br from-[#D4AF37]/20 to-[#1E3A5F]/20',
          'ring-1 ring-[#D4AF37]/20 dark:ring-[#D4AF37]/10',
          'group-hover:from-[#D4AF37]/30 group-hover:to-[#1E3A5F]/30',
          'transition-all duration-500'
        )}>
          <div className="text-[#D4AF37] [&>svg]:h-7 [&>svg]:w-7">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#1E3A5F] dark:group-hover:text-[#D4AF37] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
