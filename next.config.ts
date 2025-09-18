import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Disable server actions validation for SSLCommerz redirects
  experimental: {
    serverActions: {
      allowedOrigins: [
        'patropatri.online',
        'sandbox.sslcommerz.com',
        'securepay.sslcommerz.com',
        'localhost:3000',
        '*.sslcommerz.com',
        '*.patropatri.online'
      ],
      bodySizeLimit: '2mb',
    },
  },
  // Handle payment gateway redirects properly
  async rewrites() {
    return [
      // Rewrite POST requests to payment-redirect.html to the API handler
      {
        source: '/payment-redirect.html',
        destination: '/api/payment/redirect',
        has: [
          {
            type: 'method',
            key: 'method',
            value: 'POST',
          },
        ],
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/payment/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, x-forwarded-host, origin',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Disable strict mode for SSLCommerz compatibility
  reactStrictMode: false,
};

export default nextConfig;
