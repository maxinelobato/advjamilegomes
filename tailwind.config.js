/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brandRed: {
          900: '#5B0101',
        },
        brandRose: {
          700: '#B8979A',
          200: '#FAF2F0',
        },
        brandOrange: {
          900: '#D19343',
        },
      }
    }
  },
  plugins: [],
}
