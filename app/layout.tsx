import type { Metadata } from 'next'
import { Nunito, Nunito_Sans, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-hero',
  weight: '400',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800', '900'],
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'WhollyTees — Christian & Funny T-Shirts',
    template: '%s | WhollyTees',
  },
  description:
    'Faith-forward and laugh-out-loud tees printed on demand. Shop Christian tees, funny tees, and more — shipped right to your door.',
  keywords: ['christian t-shirts', 'funny tees', 'faith shirts', 'WhollyTees', 'Huntsville'],
  openGraph: {
    type: 'website',
    siteName: 'WhollyTees',
    title: 'WhollyTees — Christian & Funny T-Shirts',
    description: 'Faith-forward and laugh-out-loud tees printed on demand.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${nunito.variable} ${nunitoSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-white">
        {/* Announcement bar — inspired by DarkHorse's tagline strip */}
        <div className="bg-brand-yellow text-brand-dark text-center py-2 px-4">
          <span className="text-xs font-black tracking-[0.3em] uppercase">
            Faith · Fun · Fashion &nbsp;·&nbsp; Free Shipping on Orders Over $50
          </span>
        </div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  )
}
