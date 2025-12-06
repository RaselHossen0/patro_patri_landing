import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';

// Import section components
import HeroSection from '@/components/sections/HeroSection';
import FeaturesPricingSection from '@/components/sections/FeaturesPricingSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: "Patro Patri - Bangladesh's #1 Trusted Matrimony Platform",
  description: 'Find your perfect life partner with Patro Patri, Bangladesh\'s leading matrimony app. AI-powered matching, verified profiles, family involvement features. Join 100,000+ Bangladeshi singles today!',
  keywords: [
    'Patro Patri',
    'পাত্র পাত্রী',
    'Bangladeshi matrimony',
    'Bangladesh marriage',
    'Bengali matrimony',
    'Muslim matrimony Bangladesh',
    'Hindu matrimony Bangladesh',
    'matchmaking app',
    'life partner',
    'বিবাহ',
    'বাংলাদেশ ম্যাট্রিমনি',
    'Dhaka matrimony',
    'Chittagong matrimony',
    'Sylhet matrimony',
    'Rajshahi matrimony',
    'Khulna matrimony',
    'marriage app Bangladesh',
    'verified matrimony profiles',
    'safe matrimony app',
    'cultural matchmaking',
    'traditional matrimony',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Patro Patri - Bangladesh's #1 Trusted Matrimony Platform",
    description: 'Find your perfect life partner with Patro Patri. AI-powered matching, verified profiles, and family involvement features for Bangladeshi singles.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Patro Patri - Find Your Perfect Life Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Patro Patri - Bangladesh's #1 Trusted Matrimony Platform",
    description: 'Find your perfect life partner with AI-powered matching designed for Bangladeshi culture.',
    images: ['/images/twitter-image.jpg'],
  },
};

// Home page structured data
const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://patropatri.online/#webpage',
  url: 'https://patropatri.online/',
  name: "Patro Patri - Bangladesh's #1 Trusted Matrimony Platform",
  description: "Find your perfect life partner with Patro Patri, Bangladesh's leading matrimony app.",
  isPartOf: {
    '@id': 'https://patropatri.online/#website',
  },
  about: {
    '@type': 'Thing',
    name: 'Matrimony Services',
    description: 'Online matrimony and matchmaking services for Bangladeshi singles',
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://patropatri.online/images/og-image.jpg',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://patropatri.online/',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Matrimony Service',
  provider: {
    '@id': 'https://patropatri.online/#organization',
  },
  name: 'Patro Patri Matrimony Service',
  description: 'AI-powered matrimony matching service for Bangladeshi singles',
  areaServed: {
    '@type': 'Country',
    name: 'Bangladesh',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Matrimony Plans',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Plan',
          description: 'Basic matrimony features',
        },
        price: '0',
        priceCurrency: 'BDT',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Plan',
          description: 'Advanced matching and communication features',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'BDT',
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      
      <Layout>
        <HeroSection />
        <FeaturesPricingSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
}
