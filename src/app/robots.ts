import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://patropatri.online';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // API endpoints - should not be indexed
          '/api/',
          
          // Payment pages - internal functionality, not for indexing
          '/payment/',
          '/payment-redirect/',
          '/payment-redirect.html',
          
          // User account pages - private functionality
          '/users/',
          
          // Next.js static assets - fonts, chunks, etc.
          '/_next/',
          
          // Cloudflare paths - email protection, challenges, etc.
          '/cdn-cgi/',
          
          // Block specific file types that shouldn't be indexed
          '/*.woff',
          '/*.woff2',
          '/*.ttf',
          '/*.eot',
        ],
      },
      {
        // Block specific bots that might cause issues
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

