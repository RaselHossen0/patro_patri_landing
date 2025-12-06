import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

// Import section components
import HeroSection from '@/components/sections/HeroSection';
import FeaturesPricingSection from '@/components/sections/FeaturesPricingSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
  description: 'Find your perfect match with Patro Patri, the leading matrimony app designed specifically for Bangladeshi singles looking for meaningful relationships that respect cultural values.',
  keywords: 'Patro Patri, Bangladeshi matrimony, marriage app, Muslim matrimony, Bengali matrimony, matchmaking, Bangladesh marriage, life partner',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
    description: 'Find your perfect match with Patro Patri, the leading matrimony app designed specifically for Bangladeshi singles.',
    url: '/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesPricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
