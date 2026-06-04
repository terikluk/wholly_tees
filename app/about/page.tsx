import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'WhollyTees is a Huntsville, AL-based print-on-demand tee shop with a simple mission: make faith fun and laughter accessible.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header — editorial treatment */}
      <div className="bg-brand-dark pt-16 pb-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/20 to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <p className="text-brand-yellow/60 text-xs font-black tracking-[0.35em] uppercase mb-3">
            The Brand
          </p>
          <h1 className="font-hero text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 7.5rem)' }}>
            OUR STORY
          </h1>
          <p className="text-white/40 mt-3 text-sm font-semibold tracking-wide">
            Faith-forward, laugh-out-loud tees from Huntsville, AL 🚀
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-brand-yellow/20 border-l-4 border-brand-yellow rounded-r-xl p-6 mb-10">
            <p className="text-brand-dark font-bold text-lg m-0">
              "Whatever you do, do it all for the glory of God." — 1 Cor 10:31
            </p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            WhollyTees was born in Huntsville, Alabama — a city that shoots rockets into space and
            takes its BBQ very seriously. We figured, if we can put a man on the moon, we can
            put a really good faith-based pun on a t-shirt.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our mission is simple: help you wear what you believe — or what makes you laugh — or
            ideally, both. Every tee is designed to spark a conversation, lift a spirit, or at
            minimum, make someone do a double-take in the grocery store.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            We're a small team with a big God and an even bigger collection of bad puns. Every
            shirt is printed on demand, so there's no waste and no warehouse — just your design,
            made fresh, shipped straight to you.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { icon: '✝', title: 'Faith First', body: 'Everything we make is rooted in something bigger than us.' },
            { icon: '😄', title: 'Joy Always', body: "A cheerful heart is good medicine — and so is a great tee." },
            { icon: '🌍', title: 'No Waste', body: 'Print-on-demand means every shirt is made for a reason.' },
          ].map((v) => (
            <div key={v.title} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="font-black text-brand-dark text-lg mb-1">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.body}</p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="bg-brand-dark rounded-3xl p-8 text-center">
          <h2 className="font-display text-3xl font-black text-white mb-3">Get in Touch</h2>
          <p className="text-white/60 mb-6">
            Questions, custom orders, or just want to say hi? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@whollytees.com"
            className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-black rounded-full hover:bg-yellow-300 transition-colors"
          >
            hello@whollytees.com
          </a>
          <p className="text-white/30 text-sm mt-4">We typically reply within 1 business day.</p>
        </div>
      </div>
    </div>
  )
}
