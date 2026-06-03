'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const total = subtotal()

  async function handleCheckout() {
    if (items.length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            price: i.product.price,
            size: i.size,
            color: i.color,
            quantity: i.quantity,
            image: i.product.images[0],
          })),
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Checkout error. Please try again.')
      }
    } catch {
      alert('Checkout error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-24 text-center">
        <ShoppingBag className="w-20 h-20 text-gray-200 mb-6" />
        <h1 className="font-display text-3xl font-black text-brand-dark mb-3">
          Your cart is empty
        </h1>
        <p className="text-gray-400 mb-8">
          Looks like you haven't added any tees yet. Let's fix that.
        </p>
        <Link
          href="/shop"
          className="px-8 py-3 bg-brand-blue text-white font-black rounded-full hover:bg-blue-700 transition-colors"
        >
          Shop All Tees
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/shop"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-brand-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="font-display text-4xl font-black text-brand-dark mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Line items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm"
              >
                <div className="relative w-24 h-28 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Link
                        href={`/product/${item.product.id}`}
                        className="font-bold text-brand-dark hover:text-brand-blue transition-colors text-sm leading-tight"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-gray-400 mt-0.5 capitalize">
                        Size: {item.size} · Color: {item.color}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="p-1 text-gray-300 hover:text-red-400 transition-colors flex-shrink-0"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                        }
                        className="text-gray-400 hover:text-brand-dark transition-colors"
                        aria-label="Decrease"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-bold w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                        }
                        className="text-gray-400 hover:text-brand-dark transition-colors"
                        aria-label="Increase"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-black text-brand-blue">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-black text-brand-dark text-lg mb-4">Order Summary</h2>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-brand-dark">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-bold text-green-600">
                    {total >= 5000 ? 'FREE' : 'Calculated at checkout'}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mb-5">
                <div className="flex justify-between font-black text-brand-dark">
                  <span>Total</span>
                  <span className="text-brand-blue">{formatPrice(total)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full py-4 bg-brand-blue text-white font-black rounded-full hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Redirecting...' : 'Checkout with Stripe →'}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                🔒 Secure checkout · Free returns
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
