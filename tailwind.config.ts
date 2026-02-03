import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-brown': '#3D2914',
          'brown': '#6B4423',
          'light-brown': '#A67C52',
          'cream': '#F5F0E8',
          'grey': '#6B7280',
        },
        primary: {
          50: '#FDF8F3',
          100: '#F5F0E8',
          200: '#E8DCC8',
          300: '#D4C4A8',
          400: '#A67C52',
          500: '#6B4423',
          600: '#3D2914',
          700: '#2D1F0F',
          800: '#1F150A',
          900: '#100B05',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
