'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PaymentRedirectPage() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Extract SSLCommerz parameters
    const tran_id = searchParams.get('tran_id');
    const status = searchParams.get('status');
    const val_id = searchParams.get('val_id');
    
    console.log('SSLCommerz redirect parameters:', { tran_id, status, val_id });
    
    // Redirect to appropriate page based on status
    if (status === 'VALID') {
      window.location.href = `/payment/success?tran_id=${tran_id}&status=${status}&val_id=${val_id}`;
    } else {
      window.location.href = `/payment/fail?tran_id=${tran_id}&status=${status}`;
    }
  }, [searchParams]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-burgundy mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment...</h2>
        <p className="text-gray-600">Please wait while we redirect you to the appropriate page.</p>
      </div>
    </div>
  );
}
