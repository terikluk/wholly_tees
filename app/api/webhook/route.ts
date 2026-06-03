import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createPrintfulOrder } from '@/lib/printful'
import type Stripe from 'stripe'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook verification failed' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Retrieve full session with line items
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items.data.price.product', 'shipping_details'],
    })

    const shipping = fullSession.shipping_details
    const lineItems = fullSession.line_items?.data ?? []

    if (shipping?.address) {
      try {
        await createPrintfulOrder({
          external_id: session.id,
          shipping: 'STANDARD',
          recipient: {
            name: shipping.name ?? 'Customer',
            address1: shipping.address.line1 ?? '',
            address2: shipping.address.line2 ?? undefined,
            city: shipping.address.city ?? '',
            state_code: shipping.address.state ?? '',
            country_code: shipping.address.country ?? 'US',
            zip: shipping.address.postal_code ?? '',
            email: session.customer_details?.email ?? '',
          },
          items: lineItems.map((li) => {
            const product = li.price?.product as Stripe.Product | undefined
            return {
              external_variant_id: product?.metadata?.productId,
              quantity: li.quantity ?? 1,
              retail_price: ((li.amount_total ?? 0) / 100).toFixed(2),
              name: li.description ?? '',
            }
          }),
          retail_costs: {
            currency: 'USD',
            subtotal: ((session.amount_subtotal ?? 0) / 100).toFixed(2),
            shipping: '0.00',
            tax: ((session.total_details?.amount_tax ?? 0) / 100).toFixed(2),
            total: ((session.amount_total ?? 0) / 100).toFixed(2),
          },
        })
      } catch (err) {
        // Log but don't fail — order is paid, Printful can be retried
        console.error('Printful order creation failed:', err)
      }
    }
  }

  return NextResponse.json({ received: true })
}
