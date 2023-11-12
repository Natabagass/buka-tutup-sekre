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
    colors: {
      navy: '#0B122A',
      n10: '#FFFFFF'
    }
  },
  plugins: [],
}
export default config
