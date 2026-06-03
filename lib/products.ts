export type Category = 'christian' | 'funny'

export interface Product {
  id: string
  name: string
  price: number // cents
  description: string
  category: Category
  images: string[]
  colors: string[]
  sizes: string[]
  featured: boolean
  badge?: string
  printfulId?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'blessed-not-stressed',
    name: 'Blessed Not Stressed',
    price: 2799,
    description:
      'Keep calm and stay blessed. This ultra-soft tee is the perfect reminder that grace covers everything — even Mondays.',
    category: 'christian',
    images: ['https://placehold.co/600x700/FCD34D/1E1B4B?text=Blessed+Not+Stressed'],
    colors: ['yellow', 'white', 'navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: true,
    badge: 'Best Seller',
  },
  {
    id: 'faith-over-fear',
    name: 'Faith Over Fear',
    price: 2799,
    description:
      'Bold letters, bolder faith. This classic tee says it all — no matter what you face, faith wins.',
    category: 'christian',
    images: ['https://placehold.co/600x700/2563EB/FFFFFF?text=Faith+Over+Fear'],
    colors: ['blue', 'black', 'white'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: true,
  },
  {
    id: 'grace-upon-grace',
    name: 'Grace Upon Grace',
    price: 2799,
    description:
      'Inspired by John 1:16, this tee is a wearable reminder of the endless grace poured out on us daily.',
    category: 'christian',
    images: ['https://placehold.co/600x700/1E1B4B/FCD34D?text=Grace+Upon+Grace'],
    colors: ['dark', 'white'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
  },
  {
    id: 'chosen-not-perfect',
    name: 'Chosen, Not Perfect',
    price: 2799,
    description:
      'Spoiler: nobody's perfect and that's totally fine. You are chosen, loved, and enough exactly as you are.',
    category: 'christian',
    images: ['https://placehold.co/600x700/FCD34D/1E1B4B?text=Chosen+Not+Perfect'],
    colors: ['yellow', 'white'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
    badge: 'New',
  },
  {
    id: 'pray-more-worry-less',
    name: 'Pray More, Worry Less',
    price: 2799,
    description:
      'A daily reminder printed right on your chest. Lightweight, breathable, and full of good vibes.',
    category: 'christian',
    images: ['https://placehold.co/600x700/FFFFFF/2563EB?text=Pray+More+Worry+Less'],
    colors: ['white', 'blue'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
  },
  {
    id: 'holy-guacamole',
    name: 'Holy Guacamole',
    price: 2799,
    description:
      'Because some things are simply too good not to celebrate — like fresh guacamole and Sunday brunch.',
    category: 'funny',
    images: ['https://placehold.co/600x700/2563EB/FFFFFF?text=Holy+Guacamole'],
    colors: ['blue', 'green', 'white'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: true,
    badge: 'Fan Fave',
  },
  {
    id: 'jesusaurus-rex',
    name: 'Jesusaurus Rex',
    price: 2799,
    description:
      'T-rex arms were made for short prayers, but His reach is infinite. A fan-favorite for the little (and big) ones.',
    category: 'funny',
    images: ['https://placehold.co/600x700/1E1B4B/FCD34D?text=Jesusaurus+Rex'],
    colors: ['dark', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: true,
    badge: 'Best Seller',
  },
  {
    id: 'adulting-is-hard-but-jesus-tho',
    name: 'Adulting Is Hard, But Jesus Tho',
    price: 2799,
    description:
      'Taxes, traffic, and adulting in general — but at least we've got the ultimate co-pilot.',
    category: 'funny',
    images: ['https://placehold.co/600x700/FCD34D/1E1B4B?text=Adulting+Is+Hard'],
    colors: ['yellow', 'white', 'black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
    badge: 'New',
  },
  {
    id: 'sunday-kind-of-mood',
    name: 'Sunday Kind of Mood',
    price: 2799,
    description:
      'Slow mornings, good coffee, great sermon. This tee perfectly captures the vibe.',
    category: 'funny',
    images: ['https://placehold.co/600x700/FFFFFF/1E1B4B?text=Sunday+Kind+of+Mood'],
    colors: ['white', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
  },
  {
    id: 'sandwich-artist-for-the-lord',
    name: 'Sandwich Artist for the Lord',
    price: 2799,
    description:
      'Whatever you do, do it with all your heart — including making sandwiches. Blessed are the sandwich makers.',
    category: 'funny',
    images: ['https://placehold.co/600x700/2563EB/FFFFFF?text=Sandwich+Artist'],
    colors: ['blue', 'white'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    featured: false,
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured)
}

export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category)
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, count)
}

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`
}
