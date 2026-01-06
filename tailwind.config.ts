import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E7F3FF',
          100: '#C8E6C9',
          500: '#366092',
          600: '#1976D2',
        },
      },
    },
  },
  plugins: [],
}
export default config

