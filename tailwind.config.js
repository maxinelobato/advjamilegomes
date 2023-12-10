/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brandRed: {
          900: '#5B0101'
        },
        brandRose: {
          700: '#B8979A',
          200: '#FAF2F0'
        },
        brandOrange: {
          900: '#D19343'
        },
        brandBase1: {
          100: '#fffbec'
        },
        brandBase2: {
          200: '#e3deca'
        },
        brandBase3: {
          300: '#d19244'
        },
        brandPrimary: '#aa6231',
        brandSecondary: '#5c2c0c',
        brandAccent: '#3c3a1e',
      }
    },
  },
  daisyui: {
    themes: [
      {
        brand: {
          primary: '#5c2c0c',
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
