import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'
import EmailSignupBar from '@/components/EmailSignupBar'

export const metadata: Metadata = {
  title: 'WhollyTees — Christian & Funny T-Shirts',
  description:
    'Wear your faith and your sense of humor. WhollyTees carries Christian and funny tees that are bold, comfy, and totally you.',
}

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-yellow" />
          <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-brand-blue" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-2xl">
            <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              Faith · Fun · Fashion
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Wear What{' '}
              <span className="text-brand-yellow">Moves</span>{' '}
              Your Heart.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-lg">
              Christian-inspired and laugh-out-loud funny tees — because faith should be fun, and
              your wardrobe should say something worth saying.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-brand-yellow text-brand-dark font-black rounded-full text-base hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Shop All Tees
              </Link>
              <Link
                href="/shop?category=christian"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-full text-base hover:bg-white/20 transition-colors border border-white/20"
              >
                Browse Christian Tees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Cards ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-dark text-center mb-10">
            Shop by Vibe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Christian Tees card */}
            <Link
              href="/shop?category=christian"
              className="group relative rounded-3xl overflow-hidden bg-brand-dark h-72 flex items-end p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-dark opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="relative">
                <span className="text-4xl block mb-3">✝</span>
                <h3 className="font-display text-3xl font-black text-white mb-1">
                  Christian Tees
                </h3>
                <p className="text-white/70 text-sm">Bold faith, wearable daily</p>
                <span className="mt-3 inline-block text-brand-yellow font-bold text-sm group-hover:underline">
                  Shop now →
                </span>
              </div>
            </Link>

            {/* Funny Tees card */}
            <Link
              href="/shop?category=funny"
              className="group relative rounded-3xl overflow-hidden bg-brand-yellow h-72 flex items-end p-8 hover:shadow-2xl transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/60 to-brand-yellow opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="relative">
                <span className="text-4xl block mb-3">😄</span>
                <h3 className="font-display text-3xl font-black text-brand-dark mb-1">
                  Funny Tees
                </h3>
                <p className="text-brand-dark/70 text-sm">Laugh — it's a spiritual gift</p>
                <span className="mt-3 inline-block text-brand-blue font-bold text-sm group-hover:underline">
                  Shop now →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Products ────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-dark">
                Fan Favorites
              </h2>
              <p className="text-gray-500 mt-1">The tees everyone's talking about</p>
            </div>
            <Link
              href="/shop"
              className="text-brand-blue font-bold text-sm hover:underline hidden sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-brand-blue text-white font-bold rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              View All Tees
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trust Banner ─────────────────────────────────── */}
      <section className="py-12 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🚚', title: 'Free Shipping', sub: 'On orders over $50' },
              { icon: '🖨️', title: 'Print on Demand', sub: 'Made just for you' },
              { icon: '↩️', title: 'Easy Returns', sub: '30-day guarantee' },
              { icon: '🔒', title: 'Secure Checkout', sub: 'Powered by Stripe' },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-black text-brand-dark text-sm">{item.title}</h3>
                <p className="text-brand-dark/60 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email Signup ─────────────────────────────────── */}
      <EmailSignupBar />
    </>
  )
}
