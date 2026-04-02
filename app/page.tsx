import HeroSection from '@/components/home/hero-section';
import FeaturesSection from '@/components/home/features-section';
import AboutSection from '@/components/home/about-section';
import CTASection from '@/components/home/cta-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </main>
  );
}
