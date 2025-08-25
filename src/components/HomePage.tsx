import { HeroSection } from './HomePage/HeroSection';
import { StatsSection } from './HomePage/StatsSection';
import { FeaturesSection } from './HomePage/FeaturesSection';
import { ServicesSection } from './HomePage/ServicesSection';
import { CTASection } from './HomePage/CTASection';

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <StatsSection />
      <FeaturesSection />
      <ServicesSection onNavigate={onNavigate} />
      <CTASection onNavigate={onNavigate} />
    </div>
  );
}