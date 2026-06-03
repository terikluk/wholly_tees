import Link from 'next/link'
import type { Metadata } from 'next'
import OrderConfirmationClient from './OrderConfirmationClient'

export const metadata: Metadata = {
  title: 'Order Confirmed!',
}

export default function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  return <OrderConfirmationClient sessionId={searchParams.session_id} />
}
