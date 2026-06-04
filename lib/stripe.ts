import Stripe from 'stripe'

// Lazy singleton — avoids throwing at module evaluation time during Next.js build
let _instance: Stripe | null = null

function getInstance(): Stripe {
  if (!_instance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    _instance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-05-27.dahlia',
    })
  }
  return _instance
}

export const stripe: Stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return (getInstance() as unknown as Record<string | symbol, unknown>)[prop]
  },
})
