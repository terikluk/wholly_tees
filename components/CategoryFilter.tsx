'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const FILTERS = [
  { value: 'all', label: 'All Tees' },
  { value: 'christian', label: '✝ Christian' },
  { value: 'funny', label: '😄 Funny' },
]

export default function CategoryFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('category') ?? 'all'

  function select(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete('category')
    } else {
      params.set('category', value)
    }
    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => select(f.value)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 border-2 ${
            active === f.value
              ? 'bg-brand-blue text-white border-brand-blue shadow-md'
              : 'bg-white text-brand-dark border-gray-200 hover:border-brand-blue hover:text-brand-blue'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
