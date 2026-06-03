'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { CheckCircle } from 'lucide-react'

export default function OrderConfirmationClient({ sessionId }: { sessionId?: string }) {
  const { clearCart } = useCart()

  useEffect(() => {
    if (sessionId) clearCart()
  }, [sessionId, clearCart])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="font-display text-4xl font-black text-brand-dark mb-3">
          Order Confirmed! 🎉
        </h1>
        <p className="text-gray-500 mb-2">
          Your WhollyTees are heading to the printer now.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          You'll receive a shipping confirmation by email once your order ships. Typical print +
          ship time is 3–5 business days.
        </p>
        {sessionId && (
          <p className="text-xs text-gray-300 mb-6 font-mono break-all">
            Order ref: {sessionId.slice(-12)}
          </p>
        )}
        <Link
          href="/shop"
          className="inline-block w-full py-3 bg-brand-blue text-white font-black rounded-full hover:bg-blue-700 transition-colors"
        >
          Keep Shopping
        </Link>
        <Link
          href="/"
          className="mt-3 inline-block text-sm text-gray-400 hover:text-brand-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
