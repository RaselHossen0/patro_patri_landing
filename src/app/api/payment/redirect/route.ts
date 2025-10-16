import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Extract SSLCommerz parameters
  const tran_id = searchParams.get('tran_id');
  const status = searchParams.get('status');
  const val_id = searchParams.get('val_id');
  
  console.log('SSLCommerz GET redirect:', { tran_id, status, val_id });
  
  // Get the proper base URL - use the original host from headers
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = request.headers.get('host');
  const baseUrl = forwardedHost ? `https://${forwardedHost}` : (host ? `https://${host}` : 'https://patropatri.online');
  
  // Redirect to appropriate page based on status
  if (status === 'VALID') {
    const successUrl = `/payment/success?tran_id=${encodeURIComponent(tran_id || '')}&status=${encodeURIComponent(status)}&val_id=${encodeURIComponent(val_id || '')}`;
    console.log('GET redirect to success:', successUrl);
    return NextResponse.redirect(new URL(successUrl, baseUrl));
  } else {
    const failUrl = `/payment/fail?tran_id=${encodeURIComponent(tran_id || '')}&status=${encodeURIComponent(status || 'FAILED')}`;
    console.log('GET redirect to fail:', failUrl);
    return NextResponse.redirect(new URL(failUrl, baseUrl));
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check if this is a Server Action request
    const contentType = request.headers.get('content-type');
    const actionId = request.headers.get('next-action-id');
    
    console.log('Payment gateway POST redirect:', { 
      contentType, 
      actionId,
      headers: Object.fromEntries(request.headers.entries())
    });
    
    // If it's a Server Action, return an error to prevent processing
    if (actionId || contentType?.includes('text/plain')) {
      console.log('Blocking Server Action request from payment gateway');
      return new NextResponse('Server Actions not allowed for payment gateway redirects', { 
        status: 400,
        headers: {
          'Content-Type': 'text/plain',
        }
      });
    }
    
    const formData = await request.formData();
    
    // Extract payment gateway parameters from form data
    const tran_id = formData.get('tran_id') as string;
    const status = formData.get('status') as string;
    const val_id = formData.get('val_id') as string;
    const error = formData.get('error') as string;
    
    console.log('Payment gateway POST form data:', { tran_id, status, val_id, error });
    
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
    
    const redirectUrl = `/payment-redirect?${params.toString()}`;
    console.log('POST redirect to payment-redirect:', redirectUrl);
    
    return NextResponse.redirect(new URL(redirectUrl, baseUrl));
  } catch (error) {
    console.error('Error in payment gateway POST redirect:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
