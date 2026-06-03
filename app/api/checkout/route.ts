import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

interface LineItemInput {
  productId: string
  name: string
  price: number
  size: string
  color: string
  quantity: number
  image: string
}

export async function POST(req: NextRequest) {
  const { items }: { items: LineItemInput[] } = await req.json()

  if (!items?.length) {
    return NextResponse.json({ error: 'No items' }, { status: 400 })
  }

  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? req.headers.get('origin') ?? 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'usd',
        unit_amount: item.price,
        product_data: {
          name: `${item.name} (${item.size} / ${item.color})`,
          images: [item.image],
          metadata: {
            productId: item.productId,
            size: item.size,
            color: item.color,
          },
        },
      },
    })),
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    success_url: `${origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
    metadata: {
      source: 'wholly-tees',
    },
  })

  return NextResponse.json({ url: session.url })
}
