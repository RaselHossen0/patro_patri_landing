import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
  description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions.",
  keywords: "matrimony, Bangladesh, marriage, life partner, Bengali matrimony, matchmaking, Muslim matrimony, Hindu matrimony, dating, wedding",
  authors: [{ name: "Patro Patri Team" }],
  creator: "Patro Patri",
  publisher: "Patro Patri",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://patropatri.com',
    title: "Patro Patri - Bangladesh's Premier Matrimony Platform",
    description: "Find your perfect life partner with our AI-powered matching system designed specifically for Bangladeshi culture and traditions.",
    siteName: 'Patro Patri',
    images: [{
      url: '/images/og-image.jpg',
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
    images: ['/images/twitter-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#8B2332',
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
