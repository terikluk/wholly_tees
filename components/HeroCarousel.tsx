'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const SHIRTS = [
  {
    src: '/images/hero_faith_over_fear.png',
    alt: 'Faith Over Fear tee — light blue with bold distressed text',
  },
  {
    src: '/images/hero_holy_gaucamole.png',
    alt: 'Holy Guacamole tee — sage green with avocado graphic',
  },
  {
    src: '/images/hero_not_today_satan.png',
    alt: 'Not Today Satan tee — natural with snake graphic',
  },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SHIRTS.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative select-none">
      {/* Shirt stack */}
      <div className="relative aspect-[5/6] w-full max-w-[420px] mx-auto">
        {SHIRTS.map((shirt, i) => (
          <div
            key={shirt.src}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              i === active
                ? 'opacity-100 scale-100 hero-shirt-float'
                : 'opacity-0 scale-[0.97] pointer-events-none'
            }`}
          >
            <Image
              src={shirt.src}
              alt={shirt.alt}
              fill
              sizes="(max-width: 1024px) 80vw, 42vw"
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Pill dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {SHIRTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show shirt ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === active
                ? 'w-7 h-2 bg-brand-yellow'
                : 'w-2 h-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
