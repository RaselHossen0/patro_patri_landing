'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentFailContent() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    // Extract payment details from URL parameters
    const tran_id = searchParams.get('tran_id');
    const status = searchParams.get('status');
    const error = searchParams.get('error');
    
    setPaymentDetails({
      transactionId: tran_id,
      status,
      error,
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Error Icon */}
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment could not be processed. Please try again.
        </p>

        {/* Payment Details */}
        {paymentDetails && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Payment Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-mono text-gray-900">{paymentDetails.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-red-600 font-semibold capitalize">{paymentDetails.status}</span>
              </div>
              {paymentDetails.error && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Error:</span>
                  <span className="text-red-600 text-xs">{paymentDetails.error}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors block"
          >
            Return to Home
          </Link>
          <Link 
            href="/premium"
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors block"
          >
            Try Payment Again
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-xs text-gray-500">
          <p>If you continue to experience issues, please contact our support team.</p>
          <p>Your card has not been charged for this transaction.</p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentFailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentFailContent />
    </Suspense>
  );
}
