import type { Config } from 'tailwindcss'

const config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        // Brand
        accent: '#f59e0b',
        'accent-light': '#fbbf24',
        gold: '#C9A96E',
        'gold-light': '#E2C896',
        // Backgrounds
        studio: '#070707',
        deep: '#0a0a0a',
        'surface-alt': '#0d0d0d',
        'surface-mid': '#0e0e0e',
        surface: '#111111',
        'surface-dark': '#151515',
        // Text
        canvas: '#efefef',
      },
    },
  },
  plugins: [],
} satisfies Config

module.exports = config
