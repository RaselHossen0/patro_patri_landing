import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle SSLCommerz redirects
  if (request.nextUrl.pathname.startsWith('/payment/')) {
    const origin = request.headers.get('origin');
    const forwardedHost = request.headers.get('x-forwarded-host');
    
    // Allow SSLCommerz domains
    const allowedOrigins = [
      'sandbox.sslcommerz.com',
      'securepay.sslcommerz.com',
      'patropatri.online',
      'localhost:3000'
    ];
    
    if (origin && allowedOrigins.some(allowed => origin.includes(allowed))) {
      // Add CORS headers for SSLCommerz redirects
      const response = NextResponse.next();
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-forwarded-host');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/payment/:path*',
  ],
};
