'use client'

import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()
  const total = subtotal()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-brand-dark">
          <h2 className="text-white font-black text-lg">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-16 h-16 text-gray-200" />
              <p className="text-gray-400 font-medium">Your cart is empty</p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="px-6 py-2 bg-brand-blue text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-3 py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-brand-dark text-sm leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.size} · {item.color}
                    </p>
                    <p className="text-brand-blue font-black text-sm mt-1">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)
                        }
                        className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)
                        }
                        className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id, item.size, item.color)}
                    className="p-1 text-gray-300 hover:text-red-400 transition-colors self-start"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-gray-100 space-y-3 bg-gray-50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-black text-brand-dark">{formatPrice(total)}</span>
            </div>
            <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout.</p>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block w-full text-center py-3 rounded-full bg-brand-blue text-white font-black hover:bg-blue-700 transition-colors"
            >
              Review Order
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
