'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useCart } from '@/lib/cart'
import { getProduct, getRelatedProducts, formatPrice } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import SizeChart from '@/components/SizeChart'
import ReviewStars from '@/components/ReviewStars'
import { ShoppingCart, Ruler, ChevronLeft } from 'lucide-react'

const COLOR_SWATCHES: Record<string, string> = {
  white: '#FFFFFF',
  black: '#1a1a1a',
  yellow: '#FCD34D',
  blue: '#2563EB',
  navy: '#1E3A5F',
  dark: '#1E1B4B',
  green: '#16A34A',
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  if (!product) return notFound()

  const related = getRelatedProducts(product)
  const { addItem, openCart } = useCart()

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [sizeError, setSizeError] = useState(false)
  const [showSizeChart, setShowSizeChart] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    if (!selectedSize) {
      setSizeError(true)
      return
    }
    setSizeError(false)
    addItem(product!, selectedSize, selectedColor)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-brand-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-brand-dark transition-colors">Shop</Link>
            <span>/</span>
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-brand-dark transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-brand-dark font-medium truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-white/90 text-brand-dark text-xs font-black px-3 py-1 rounded-full shadow">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue mb-2">
                {product.category === 'christian' ? '✝ Christian Tees' : '😄 Funny Tees'}
              </span>
              <h1 className="font-display text-4xl font-black text-brand-dark leading-tight mb-3">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <ReviewStars rating={4.8} count={42} />
                <span className="text-sm text-gray-400">42 reviews</span>
              </div>

              <p className="text-3xl font-black text-brand-blue mb-6">
                {formatPrice(product.price)}
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color selector */}
              {product.colors.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-bold text-brand-dark mb-2 capitalize">
                    Color: <span className="font-normal">{selectedColor}</span>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? 'border-brand-blue scale-110 shadow-md'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: COLOR_SWATCHES[color] ?? '#ccc' }}
                        aria-label={`Select color ${color}`}
                        aria-pressed={selectedColor === color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-brand-dark">
                    Size{' '}
                    {sizeError && (
                      <span className="text-red-500 font-normal text-xs ml-1">
                        — please select a size
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => setShowSizeChart(true)}
                    className="flex items-center gap-1 text-xs text-brand-blue hover:underline"
                  >
                    <Ruler className="w-3 h-3" />
                    Size chart
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size)
                        setSizeError(false)
                      }}
                      className={`px-4 py-2 rounded-full border-2 text-sm font-bold transition-all ${
                        selectedSize === size
                          ? 'border-brand-blue bg-brand-blue text-white'
                          : 'border-gray-200 text-brand-dark hover:border-brand-blue'
                      }`}
                      aria-pressed={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-black text-base transition-all duration-200 ${
                  added
                    ? 'bg-green-500 text-white'
                    : 'bg-brand-blue text-white hover:bg-blue-700 active:scale-95'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? 'Added to Cart! ✓' : 'Add to Cart'}
              </button>

              {/* Perks */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">🚚 Free shipping over $50</div>
                <div className="flex items-center gap-1.5">🖨️ Printed on demand</div>
                <div className="flex items-center gap-1.5">↩️ 30-day returns</div>
                <div className="flex items-center gap-1.5">🔒 Secure checkout</div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-20">
              <h2 className="font-display text-2xl font-black text-brand-dark mb-6">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}
    </>
  )
}
