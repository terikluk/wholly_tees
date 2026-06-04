import type { Metadata } from 'next'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import HeroCarousel from '@/components/HeroCarousel'
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
      {/* ── Hero — DarkHorse-style two-column stacked title ── */}
      <section className="relative min-h-[92vh] hero-bg-animate flex items-center overflow-hidden">
        {/* Animated ombré wave blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-wave hero-wave-1" />
          <div className="hero-wave hero-wave-2" />
          <div className="hero-wave hero-wave-3" />
          <div className="hero-wave hero-wave-4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — title + description + CTAs */}
            <div>
              <div className="leading-[0.88] mb-6">
                <span className="font-hero text-white block"
                  style={{ fontSize: 'clamp(4rem, 11vw, 8.5rem)' }}>
                  WHOLLY
                </span>
                <span className="font-hero text-brand-yellow block"
                  style={{ fontSize: 'clamp(4rem, 11vw, 8.5rem)' }}>
                  TEES
                </span>
              </div>
              <p className="text-white/40 text-xs font-black tracking-[0.3em] uppercase mb-8">
                Christian &nbsp;·&nbsp; Funny &nbsp;·&nbsp; Faith-Forward
              </p>
              <p className="text-white font-black text-xl sm:text-2xl mb-3">
                Faith-forward tees with a sense of humor.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Funny, faith-forward Christian tees for people who love Jesus, laugh often,
                and aren't afraid to start a conversation.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
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
              <div className="flex flex-wrap gap-6 text-xs text-white/30 font-semibold tracking-wide uppercase">
                <span>🖨 Printed on demand</span>
                <span>🚚 Free shipping $50+</span>
                <span>🔒 Stripe checkout</span>
              </div>
            </div>

            {/* Right — shirt carousel */}
            <div>
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── SHOP + BROWSE callout — DarkHorse "WATCH + LISTEN NOW" equivalent ── */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2 className="font-hero leading-none text-brand-dark mb-3"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
                SHOP +{' '}
                <span className="text-brand-blue">BROWSE</span>
              </h2>
              <p className="text-brand-dark/60 text-base font-semibold">
                Find your next faith-forward or laugh-out-loud tee — made to order, shipped to you.
              </p>
            </div>
            <div className="flex flex-row lg:flex-col gap-3">
              <Link
                href="/shop?category=christian"
                className="flex items-center justify-between gap-10 px-6 py-4 bg-brand-dark text-white font-black rounded-xl hover:bg-brand-dark/80 transition-colors text-sm"
              >
                <span>Christian Tees</span>
                <span className="text-brand-yellow">✝</span>
              </Link>
              <Link
                href="/shop?category=funny"
                className="flex items-center justify-between gap-10 px-6 py-4 bg-brand-dark text-white font-black rounded-xl hover:bg-brand-dark/80 transition-colors text-sm"
              >
                <span>Funny Tees</span>
                <span>😄</span>
              </Link>
              <Link
                href="/shop"
                className="flex items-center justify-between gap-10 px-6 py-4 bg-brand-blue text-white font-black rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                <span>All Tees</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Cards ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-brand-blue text-xs font-black tracking-[0.3em] uppercase mb-2">
              Shop by Vibe
            </p>
            <h2 className="font-hero text-brand-dark leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              TWO KINDS OF{' '}
              <span className="text-brand-blue">GREAT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/shop?category=christian"
              className="group relative rounded-3xl overflow-hidden bg-brand-dark h-80 flex items-end p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/70 to-brand-dark/95 group-hover:opacity-90 transition-opacity" />
              <div className="relative">
                <span className="font-hero text-white/30 text-8xl leading-none block -mb-2">✝</span>
                <h3 className="font-hero text-white leading-none mb-1"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  CHRISTIAN TEES
                </h3>
                <p className="text-white/50 text-sm font-semibold">Bold faith, wearable daily</p>
                <span className="mt-4 inline-block text-brand-yellow font-black text-sm tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  Shop now →
                </span>
              </div>
            </Link>

            <Link
              href="/shop?category=funny"
              className="group relative rounded-3xl overflow-hidden bg-brand-yellow h-80 flex items-end p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/40 to-brand-yellow/95 group-hover:opacity-90 transition-opacity" />
              <div className="relative">
                <span className="font-hero text-brand-dark/20 text-8xl leading-none block -mb-2">😄</span>
                <h3 className="font-hero text-brand-dark leading-none mb-1"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  FUNNY TEES
                </h3>
                <p className="text-brand-dark/50 text-sm font-semibold">Laugh — it's a spiritual gift</p>
                <span className="mt-4 inline-block text-brand-blue font-black text-sm tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  Shop now →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fan Favorites ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brand-blue text-xs font-black tracking-[0.3em] uppercase mb-2">
                Featured
              </p>
              <h2 className="font-hero text-brand-dark leading-none"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                FAN FAVORITES
              </h2>
              <p className="text-gray-400 mt-2 font-semibold text-sm">The tees everyone's talking about</p>
            </div>
            <Link
              href="/shop"
              className="text-brand-blue font-black text-sm tracking-widest uppercase hover:underline hidden sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-brand-blue text-white font-black rounded-full text-sm hover:bg-blue-700 transition-colors"
            >
              View All Tees
            </Link>
          </div>
        </div>
      </section>

      {/* ── About strip — DarkHorse-style full-width quote section ── */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/20 to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-yellow/60 text-xs font-black tracking-[0.35em] uppercase mb-6">
            Our Mission
          </p>
          <blockquote className="font-hero text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            BE GOOD TO THE ONES YOU LOVE.
            <br />
            <span className="text-brand-yellow">WEAR SOMETHING THAT SAYS IT.</span>
          </blockquote>
          <Link
            href="/about"
            className="inline-block px-8 py-3 border border-white/20 text-white font-black rounded-full text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── Email Signup ── */}
      <EmailSignupBar />
    </>
  )
}
