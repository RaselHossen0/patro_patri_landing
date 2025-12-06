import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B2332' },
    { media: '(prefers-color-scheme: dark)', color: '#5a161f' },
  ],
  colorScheme: 'light',
};

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

const siteConfig = {
  name: 'Patro Patri',
  url: 'https://patropatri.online',
  description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions. Bangladesh's #1 trusted matrimony platform.",
  shortDescription: "Bangladesh's Premier Matrimony Platform",
  appStoreUrl: 'https://play.google.com/store/apps/details?id=com.patropatri.matrimony',
  email: 'contact@patropatri.online',
  phone: '+880 1234 567890',
  address: {
    street: 'Dhaka',
    city: 'Dhaka',
    country: 'Bangladesh',
    countryCode: 'BD',
  },
  social: {
    facebook: 'https://facebook.com/patropatri',
    twitter: 'https://twitter.com/patropatri',
    instagram: 'https://instagram.com/patropatri',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.shortDescription}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'matrimony',
    'Bangladesh',
    'Bangladeshi matrimony',
    'Bengali matrimony',
    'marriage',
    'life partner',
    'matchmaking',
    'Muslim matrimony',
    'Hindu matrimony',
    'wedding',
    'বিবাহ',
    'পাত্র পাত্রী',
    'Dhaka matrimony',
    'Chittagong matrimony',
    'Sylhet matrimony',
    'marriage app',
    'matrimony app Bangladesh',
  ],
  authors: [{ name: 'Patro Patri Team', url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'bn-BD': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['bn_BD'],
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.shortDescription}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Find Your Perfect Life Partner`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.shortDescription}`,
    description: siteConfig.description,
    creator: '@patropatri',
    site: '@patropatri',
    images: {
      url: '/images/twitter-image.jpg',
      alt: `${siteConfig.name} - Find Your Perfect Life Partner`,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'matrimony',
  classification: 'Matrimony & Dating',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name,
  },
  applicationName: siteConfig.name,
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'msapplication-TileColor': '#8B2332',
    'msapplication-config': '/browserconfig.xml',
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.countryCode,
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.twitter,
    siteConfig.social.instagram,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone,
    contactType: 'customer service',
    availableLanguage: ['English', 'Bengali'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  inLanguage: ['en-US', 'bn-BD'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': `${siteConfig.url}/#app`,
  name: siteConfig.name,
  description: siteConfig.description,
  operatingSystem: 'Android',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BDT',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    ratingCount: '1000',
    bestRating: '5',
    worstRating: '1',
  },
  downloadUrl: siteConfig.appStoreUrl,
  installUrl: siteConfig.appStoreUrl,
  author: {
    '@id': `${siteConfig.url}/#organization`,
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteConfig.url,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* DNS Prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://api.patropatri.online" />
        
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3348724239410590"
          crossOrigin="anonymous"
        />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mobileAppSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <GoogleAnalytics />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
