const PRINTFUL_API = 'https://api.printful.com'

function getHeaders() {
  if (!process.env.PRINTFUL_API_KEY) {
    throw new Error('PRINTFUL_API_KEY is not set')
  }
  return {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    'Content-Type': 'application/json',
  }
}

export interface PrintfulLineItem {
  sync_variant_id?: number
  external_variant_id?: string
  quantity: number
  retail_price?: string
  name?: string
}

export interface PrintfulAddress {
  name: string
  address1: string
  address2?: string
  city: string
  state_code: string
  country_code: string
  zip: string
  email: string
  phone?: string
}

export interface PrintfulOrderPayload {
  external_id: string
  shipping: string
  recipient: PrintfulAddress
  items: PrintfulLineItem[]
  retail_costs?: {
    currency: string
    subtotal: string
    shipping: string
    tax: string
    total: string
  }
}

export async function createPrintfulOrder(payload: PrintfulOrderPayload) {
  const res = await fetch(`${PRINTFUL_API}/orders`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ ...payload, confirm: true }),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(`Printful order creation failed: ${JSON.stringify(err)}`)
  }
  return res.json()
}

export async function getPrintfulOrder(id: string | number) {
  const res = await fetch(`${PRINTFUL_API}/orders/${id}`, { headers: getHeaders() })
  if (!res.ok) throw new Error(`Printful fetch failed for order ${id}`)
  return res.json()
}

export async function getPrintfulProducts() {
  const res = await fetch(`${PRINTFUL_API}/sync/products`, { headers: getHeaders() })
  if (!res.ok) throw new Error('Failed to fetch Printful products')
  return res.json()
}
