import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Handle SSLCommerz redirects (pages under /payment/*)
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
    
    // Always allow SSLCommerz redirects
    if (origin && allowedOrigins.some(allowed => origin.includes(allowed))) {
      // Add CORS headers for SSLCommerz redirects
      const response = NextResponse.next();
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-forwarded-host, origin');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      return response;
    }
    
    // For SSLCommerz redirects, always allow regardless of origin
    if (origin && origin.includes('sslcommerz.com')) {
      const response = NextResponse.next();
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-forwarded-host, origin');
      response.headers.set('Access-Control-Allow-Credentials', 'true');
      return response;
    }
  }

  // Special handling only for the redirect API route to avoid Server Actions conflicts
  if (request.nextUrl.pathname === '/api/payment/redirect') {
    const contentType = request.headers.get('content-type');
    const actionId = request.headers.get('next-action-id');

    if (actionId || contentType?.includes('text/plain')) {
      console.log('Blocking Server Action request on /api/payment/redirect:', {
        url: request.url,
        method: request.method,
        contentType,
        actionId,
        origin: request.headers.get('origin'),
        forwardedHost: request.headers.get('x-forwarded-host')
      });

      return new NextResponse('Server Actions are disabled on this route', {
        status: 400,
        headers: {
          'Content-Type': 'text/plain',
        }
      });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/payment/:path*',
    '/api/payment/redirect',
  ],
};
