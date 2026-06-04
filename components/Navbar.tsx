'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/shop', label: 'Shop All' },
  { href: '/shop?category=christian', label: 'Christian Tees' },
  { href: '/shop?category=funny', label: 'Funny Tees' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const { totalItems, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const count = totalItems()

  return (
    <header className="sticky top-0 z-40 bg-brand-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center bg-white rounded-lg px-3 py-1">
            <Image
              src="/wholly_tees_logo.png"
              alt="WhollyTees"
              width={80}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative p-2 text-white hover:text-brand-yellow transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-yellow text-brand-dark text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-white hover:text-brand-yellow"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-semibold text-white hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
