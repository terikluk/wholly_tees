'use client'

import { X } from 'lucide-react'

interface SizeChartProps {
  onClose: () => void
}

const SIZES = [
  { size: 'S', chest: '34–36', length: '27' },
  { size: 'M', chest: '38–40', length: '28' },
  { size: 'L', chest: '42–44', length: '29' },
  { size: 'XL', chest: '46–48', length: '30' },
  { size: '2XL', chest: '50–52', length: '31' },
]

export default function SizeChart({ onClose }: SizeChartProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-brand-dark">Size Chart</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close size chart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">All measurements in inches (unisex tee fit).</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-brand-dark text-white">
              <th className="py-2 px-3 text-left rounded-tl-lg">Size</th>
              <th className="py-2 px-3 text-left">Chest</th>
              <th className="py-2 px-3 text-left rounded-tr-lg">Length</th>
            </tr>
          </thead>
          <tbody>
            {SIZES.map((row, i) => (
              <tr
                key={row.size}
                className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="py-2 px-3 font-bold text-brand-dark">{row.size}</td>
                <td className="py-2 px-3 text-gray-600">{row.chest}"</td>
                <td className="py-2 px-3 text-gray-600">{row.length}"</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 text-xs text-gray-400">
          Between sizes? Size up for a relaxed fit or size down for a fitted look.
        </p>
      </div>
    </div>
  )
}
