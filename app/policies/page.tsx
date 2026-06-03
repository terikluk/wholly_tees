import type { Metadata } from 'next'
import SizeChartStatic from '@/components/SizeChartStatic'

export const metadata: Metadata = {
  title: 'Shipping, Returns & Size Chart',
  description: 'WhollyTees shipping info, return policy, and size chart.',
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-brand-dark py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-black text-white mb-2">Policies & Info</h1>
          <p className="text-white/60">Everything you need to know about ordering with WhollyTees.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Shipping */}
        <section>
          <h2 className="font-display text-2xl font-black text-brand-dark mb-4 flex items-center gap-2">
            🚚 Shipping
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3 text-sm text-gray-600">
            <p>All orders are printed on demand via Printful and typically ship within <strong>3–5 business days</strong> after ordering.</p>
            <p>Shipping is <strong>free on orders over $50</strong>. Standard domestic shipping is $4.99 for orders under $50.</p>
            <p>Domestic delivery typically takes <strong>3–7 business days</strong> after shipping.</p>
            <p>We ship to the <strong>US and Canada</strong>. International orders may take 7–14 business days and may incur customs fees.</p>
            <p>You'll receive a tracking email as soon as your order ships.</p>
          </div>
        </section>

        {/* Returns */}
        <section>
          <h2 className="font-display text-2xl font-black text-brand-dark mb-4 flex items-center gap-2">
            ↩️ Returns & Exchanges
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-3 text-sm text-gray-600">
            <p>We want you to love your tee. If something's wrong, we'll make it right.</p>
            <p><strong>Defective or wrong items:</strong> Contact us within <strong>30 days</strong> of delivery and we'll send a replacement at no cost.</p>
            <p><strong>Size exchanges:</strong> Because every shirt is printed on demand, we can't accept returns for incorrect size orders. Please use our size chart below before ordering.</p>
            <p><strong>No returns on custom or final-sale items.</strong></p>
            <p>To start a return or exchange, email us at <a href="mailto:hello@whollytees.com" className="text-brand-blue hover:underline">hello@whollytees.com</a> with your order number.</p>
          </div>
        </section>

        {/* Size Chart */}
        <section id="size-chart">
          <h2 className="font-display text-2xl font-black text-brand-dark mb-4 flex items-center gap-2">
            📏 Size Chart
          </h2>
          <SizeChartStatic />
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-2xl font-black text-brand-dark mb-4 flex items-center gap-2">
            ❓ FAQ
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What brand of t-shirt do you use?',
                a: "We use Bella+Canvas 3001 unisex tees — one of the softest, most popular blanks in the print-on-demand world. They're pre-shrunk and ring-spun cotton.",
              },
              {
                q: 'Will my shirt shrink?',
                a: 'Our shirts are pre-shrunk, but for best results, machine wash cold and tumble dry low. Avoid high heat.',
              },
              {
                q: 'Can I order in bulk or customize a design?',
                a: 'Yes! Email us at hello@whollytees.com for bulk or custom orders. We love making shirts for church groups, events, and teams.',
              },
              {
                q: 'When will my order arrive?',
                a: 'Print time is 3–5 business days. Shipping adds another 3–7 business days. Total: roughly 1–2 weeks for most US orders.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-brand-dark text-sm mb-1">{item.q}</h3>
                <p className="text-gray-500 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
