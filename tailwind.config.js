/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0F0E0E',
        light: '#FFFFFF',
        gween: '#b6e388',
      },
      fontFamily: {
        inter: ['var(--inter)'],
        newYork: ['var(--newyork)'],
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(1,0,0,1)',
      },
      spacing: {
        xs: '1vw',
        sm: '2vw',
        md: '3vw',
        lg: '6vw',
        xl: '10vw',
        '2xl': '20vw',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
