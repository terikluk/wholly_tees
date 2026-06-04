import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FCD34D',
          blue: '#2563EB',
          dark: '#1E1B4B',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        hero: ['var(--font-hero)', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
