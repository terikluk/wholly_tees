import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'
import { PRODUCTS, getProductsByCategory } from '@/lib/products'
import type { Category } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Shop All Tees',
  description:
    'Browse all WhollyTees designs — Christian tees, funny tees, and everything in between. Filter by category and find your new favorite.',
}

interface ShopPageProps {
  searchParams: { category?: string }
}

const VALID_CATEGORIES: Category[] = ['christian', 'funny']

export default function ShopPage({ searchParams }: ShopPageProps) {
  const rawCategory = searchParams.category
  const category = VALID_CATEGORIES.includes(rawCategory as Category)
    ? (rawCategory as Category)
    : undefined

  const products = category ? getProductsByCategory(category) : PRODUCTS

  const headingMap: Record<string, string> = {
    christian: 'Christian Tees',
    funny: 'Funny Tees',
  }

  const heading = category ? headingMap[category] : 'All Tees'
  const subheading = category
    ? category === 'christian'
      ? 'Bold faith, wearable every day.'
      : "Because laughter really is the best medicine."
    : 'Every tee is made on demand, printed with love, shipped to you.'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-brand-dark py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-2">
            {heading}
          </h1>
          <p className="text-white/60 text-base">{subheading}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Suspense fallback={<div className="h-10" />}>
            <CategoryFilter />
          </Suspense>
          <p className="text-sm text-gray-400">
            {products.length} {products.length === 1 ? 'design' : 'designs'}
          </p>
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-5xl mb-4">🤔</p>
            <p className="font-bold">No tees found in that category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
