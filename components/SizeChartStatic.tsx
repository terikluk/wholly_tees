const SIZES = [
  { size: 'S', chest: '34–36', length: '27' },
  { size: 'M', chest: '38–40', length: '28' },
  { size: 'L', chest: '42–44', length: '29' },
  { size: 'XL', chest: '46–48', length: '30' },
  { size: '2XL', chest: '50–52', length: '31' },
]

export default function SizeChartStatic() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <p className="text-sm text-gray-500 mb-4">All measurements in inches (unisex tee fit). When in doubt, size up for a relaxed fit.</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-brand-dark text-white">
            <th className="py-2 px-4 text-left rounded-tl-lg">Size</th>
            <th className="py-2 px-4 text-left">Chest (inches)</th>
            <th className="py-2 px-4 text-left rounded-tr-lg">Length (inches)</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((row, i) => (
            <tr key={row.size} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="py-3 px-4 font-bold text-brand-dark">{row.size}</td>
              <td className="py-3 px-4 text-gray-600">{row.chest}"</td>
              <td className="py-3 px-4 text-gray-600">{row.length}"</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
