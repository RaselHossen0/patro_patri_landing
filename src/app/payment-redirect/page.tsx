'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Force dynamic rendering to prevent prerendering issues
export const dynamic = 'force-dynamic';

function PaymentRedirectContent() {
  const searchParams = useSearchParams();
  const [isProcessing, setIsProcessing] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    // Extract parameters from URL
    const tran_id = searchParams.get('tran_id');
    const status = searchParams.get('status');
    const val_id = searchParams.get('val_id');
    const error = searchParams.get('error');

    const info = {
      href: window.location.href,
      search: window.location.search,
      tran_id,
      status,
      val_id,
      error,
      timestamp: new Date().toISOString(),
    };

    setDebugInfo(info);
    console.log('Payment redirect parameters:', info);

    // Redirect after a short delay
    setTimeout(() => {
      setIsProcessing(false);
      
      if (status === 'VALID' || status === 'SUCCESS') {
        window.location.replace(`/payment/success?tran_id=${encodeURIComponent(tran_id || '')}&status=${encodeURIComponent(status)}&val_id=${encodeURIComponent(val_id || '')}`);
      } else if (status === 'FAILED' || status === 'CANCELLED' || status === 'CANCEL' || error) {
        window.location.replace(`/payment/fail?tran_id=${encodeURIComponent(tran_id || '')}&status=${encodeURIComponent(status || 'FAILED')}&error=${encodeURIComponent(error || '')}`);
      } else {
        // Fallback: redirect to success page
        window.location.replace('/payment/success');
      }
    }, 1000);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Processing Spinner */}
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        {/* Processing Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Processing Payment...
        </h1>
        <p className="text-gray-600 mb-6">
          Please wait while we redirect you to the appropriate page.
        </p>

        {/* Debug Information */}
        {debugInfo && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-mono text-gray-900">{debugInfo.tran_id || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold capitalize">{debugInfo.status || 'N/A'}</span>
              </div>
              {debugInfo.val_id && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Validation ID:</span>
                  <span className="font-mono text-gray-900">{debugInfo.val_id}</span>
                </div>
              )}
              {debugInfo.error && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Error:</span>
                  <span className="text-red-600 text-xs">{debugInfo.error}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Manual Navigation */}
        {!isProcessing && (
          <div className="space-y-3">
            <Link 
              href="/payment/success"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors block"
            >
              Go to Success Page
            </Link>
            <Link 
              href="/payment/fail"
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors block"
            >
              Go to Fail Page
            </Link>
            <Link 
              href="/"
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors block"
            >
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentRedirectPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentRedirectContent />
    </Suspense>
  );
}
