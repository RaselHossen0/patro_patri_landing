'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentCancelContent() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  useEffect(() => {
    // Extract payment details from URL parameters
    const tran_id = searchParams.get('tran_id');
    const status = searchParams.get('status');
    
    setPaymentDetails({
      transactionId: tran_id,
      status,
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Cancel Icon */}
        <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>

        {/* Cancel Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges have been made to your account.
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
                <span className="text-yellow-600 font-semibold capitalize">{paymentDetails.status}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link 
            href="/"
            className="w-full bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors block"
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
          <p>You can try the payment again whenever you're ready.</p>
          <p>If you need assistance, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentCancelContent />
    </Suspense>
  );
}
