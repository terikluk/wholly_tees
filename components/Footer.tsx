import Link from 'next/link'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-3">
              <span className="text-brand-yellow font-display text-2xl font-black">
                Wholly<span className="text-white">Tees</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Faith-forward, laugh-out-loud tees printed with love in the USA. Wear what you
              believe — and what makes you smile.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white/50 text-xs">
              <Shield className="w-4 h-4" />
              <span>Secure checkout powered by Stripe</span>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-brand-yellow font-bold text-sm uppercase tracking-wider mb-3">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Tees</Link></li>
              <li><Link href="/shop?category=christian" className="hover:text-white transition-colors">Christian Tees</Link></li>
              <li><Link href="/shop?category=funny" className="hover:text-white transition-colors">Funny Tees</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-brand-yellow font-bold text-sm uppercase tracking-wider mb-3">
              Help
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/policies" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/policies" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/policies#size-chart" className="hover:text-white transition-colors">Size Chart</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} WhollyTees · Huntsville, AL</p>
          <p>Made with ❤️ and a lot of faith</p>
        </div>
      </div>
    </footer>
  )
}
