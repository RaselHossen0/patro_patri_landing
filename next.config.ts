import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Allow SSLCommerz redirects
  experimental: {
    serverActions: {
      allowedOrigins: [
        'patropatri.online',
        'sandbox.sslcommerz.com',
        'securepay.sslcommerz.com',
        'localhost:3000'
      ],
    },
  },
  // Handle SSLCommerz redirects properly
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
            value: 'Content-Type, Authorization, x-forwarded-host',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
