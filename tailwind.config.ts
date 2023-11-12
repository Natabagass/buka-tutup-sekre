import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      rajdhani: ['Rajdhani'] 
    },
    extend: {
      colors: {
        navy: '#0B122A',
        n10: '#FFFFFF',
        n200: '#E3E8EF',
        n100: '#EEF2F6',
        n400: '#9AA4B2'
      }
    }
  },
  plugins: [],
}
export default config
