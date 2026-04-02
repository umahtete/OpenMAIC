'use client';

import { motion } from 'motion/react';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E3A5F]/3 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#1E3A5F] bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At LuxUp Training, we believe every learner deserves access to world-class education. 
            Our AI-powered platform transforms how knowledge is delivered, making learning 
            more accessible, engaging, and effective than ever before.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Target className="h-6 w-6" />,
              title: 'Precision Learning',
              description: 'AI algorithms identify your strengths and areas for growth, creating targeted learning paths.'
            },
            {
              icon: <Heart className="h-6 w-6" />,
              title: 'Student-Centered',
              description: 'Every feature is designed with the learner in mind, prioritizing engagement and understanding.'
            },
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: 'Innovation First',
              description: 'We leverage cutting-edge AI technology to deliver transformative educational experiences.'
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: 'Global Community',
              description: 'Join thousands of learners worldwide who are advancing their knowledge with LuxUp.'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                'group relative p-6 rounded-2xl text-center',
                'bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg',
                'border border-border/40 dark:border-border/20',
                'hover:border-[#D4AF37]/30 dark:hover:border-[#D4AF37]/20',
                'transition-all duration-500'
              )}
            >
              <div className={cn(
                'inline-flex items-center justify-center h-12 w-12 rounded-xl mb-4',
                'bg-gradient-to-br from-[#D4AF37]/20 to-[#1E3A5F]/20',
                'text-[#D4AF37]',
                'group-hover:scale-110 transition-transform duration-300'
              )}>
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 text-center"
        >
          <div className={cn(
            'inline-flex items-center gap-3 px-6 py-3 rounded-full',
            'bg-gradient-to-r from-[#1E3A5F]/10 to-[#D4AF37]/10',
            'border border-[#D4AF37]/20',
            'text-sm font-medium'
          )}>
            <span className="text-[#1E3A5F] dark:text-[#D4AF37]">LuxUp Training</span>
            <span className="text-muted-foreground">—</span>
            <span className="text-muted-foreground">Empowering learners since 2024</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
