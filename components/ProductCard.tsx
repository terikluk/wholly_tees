import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'

const CATEGORY_LABELS: Record<string, string> = {
  christian: 'Christian',
  funny: 'Funny',
}

const CATEGORY_COLORS: Record<string, string> = {
  christian: 'bg-brand-blue text-white',
  funny: 'bg-brand-yellow text-brand-dark',
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span
            className={`text-xs font-bold px-2 py-0.5 rounded-full ${CATEGORY_COLORS[product.category]}`}
          >
            {CATEGORY_LABELS[product.category]}
          </span>
          {product.badge && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/90 text-brand-dark shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-brand-dark text-sm leading-tight mb-1 group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-brand-blue font-black text-base">{formatPrice(product.price)}</p>
      </div>
    </Link>
  )
}
