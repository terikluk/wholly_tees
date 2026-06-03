'use client'

import { useState } from 'react'

export default function EmailSignupBar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-3xl block mb-3">✉️</span>
        <h2 className="font-display text-3xl font-black text-white mb-2">
          Get 10% Off Your First Order
        </h2>
        <p className="text-white/60 text-sm mb-6">
          Join the WhollyTees fam. New drops, laughs, and deals — delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-brand-yellow font-bold text-lg">
            You're in! Check your inbox for your discount code. 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full text-brand-dark text-sm outline-none focus:ring-2 focus:ring-brand-yellow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-yellow text-brand-dark font-black rounded-full text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Get 10% Off
            </button>
          </form>
        )}
        <p className="text-white/30 text-xs mt-4">No spam ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
