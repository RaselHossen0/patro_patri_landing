import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8B2332',
};

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://patropatri.online'),
  title: {
    default: "Patro Patri - Bangladesh's Premier Matrimony Platform",
    template: "%s | Patro Patri",
  },
  description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions.",
  keywords: "matrimony, Bangladesh, marriage, life partner, Bengali matrimony, matchmaking, Muslim matrimony, Hindu matrimony, dating, wedding",
  authors: [{ name: "Patro Patri Team" }],
  creator: "Patro Patri",
  publisher: "Patro Patri",
  alternates: {
    canonical: 'https://patropatri.online',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://patropatri.online',
    title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
    description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions.",
    siteName: 'Patro Patri',
    images: [{
      url: 'https://patropatri.online/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Patro Patri - Find Your Perfect Life Partner',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
    description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions.",
    creator: '@patropatri',
    images: ['https://patropatri.online/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3348724239410590"
          crossOrigin="anonymous"
        />
      </head>
      <GoogleAnalytics />
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
