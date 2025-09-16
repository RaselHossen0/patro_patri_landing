import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Extract SSLCommerz parameters
  const tran_id = searchParams.get('tran_id');
  const status = searchParams.get('status');
  const val_id = searchParams.get('val_id');
  
  // Get the proper base URL
  const baseUrl = request.headers.get('host') ? `https://${request.headers.get('host')}` : 'https://patropatri.online';
  
  // Redirect to appropriate page based on status
  if (status === 'VALID') {
    return NextResponse.redirect(
      new URL(`/payment/success?tran_id=${tran_id}&status=${status}&val_id=${val_id}`, baseUrl)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/payment/fail?tran_id=${tran_id}&status=${status}`, baseUrl)
    );
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  
  // Extract SSLCommerz parameters from form data
  const tran_id = formData.get('tran_id') as string;
  const status = formData.get('status') as string;
  const val_id = formData.get('val_id') as string;
  
  // Get the proper base URL
  const baseUrl = request.headers.get('host') ? `https://${request.headers.get('host')}` : 'https://patropatri.online';
  
  // Redirect to appropriate page based on status
  if (status === 'VALID') {
    return NextResponse.redirect(
      new URL(`/payment/success?tran_id=${tran_id}&status=${status}&val_id=${val_id}`, baseUrl)
    );
  } else {
    return NextResponse.redirect(
      new URL(`/payment/fail?tran_id=${tran_id}&status=${status}`, baseUrl)
    );
  }
}
