import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Payment gateway POST redirect (.html):', { 
      headers: Object.fromEntries(request.headers.entries())
    });
    
    const formData = await request.formData();
    
    // Extract payment gateway parameters from form data
    const tran_id = formData.get('tran_id') as string;
    const status = formData.get('status') as string;
    const val_id = formData.get('val_id') as string;
    const error = formData.get('error') as string;
    
    console.log('Payment gateway POST form data (.html):', { tran_id, status, val_id, error });
    
    // Get the proper base URL - use the original host from headers
    const forwardedHost = request.headers.get('x-forwarded-host');
    const host = request.headers.get('host');
    const baseUrl = forwardedHost ? `https://${forwardedHost}` : (host ? `https://${host}` : 'https://patropatri.online');
    
    // Redirect to the new payment-redirect page with parameters
    const params = new URLSearchParams();
    if (tran_id) params.set('tran_id', tran_id);
    if (status) params.set('status', status);
    if (val_id) params.set('val_id', val_id);
    if (error) params.set('error', error);
    
    return NextResponse.redirect(
      new URL(`/payment-redirect?${params.toString()}`, baseUrl)
    );
  } catch (error) {
    console.error('Error in payment gateway POST redirect (.html):', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Handle GET requests by redirecting to the main payment-redirect page
  const searchParams = request.nextUrl.searchParams;
  const params = new URLSearchParams();
  
  for (const [key, value] of searchParams.entries()) {
    params.set(key, value);
  }
  
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = request.headers.get('host');
  const baseUrl = forwardedHost ? `https://${forwardedHost}` : (host ? `https://${host}` : 'https://patropatri.online');
  
  return NextResponse.redirect(
    new URL(`/payment-redirect?${params.toString()}`, baseUrl)
  );
}
