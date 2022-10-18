/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8', 
        secondary: '#1a0dab',
      },
      boxShadow: {
        main: '0 1px 6px rgb(32 33 36 / 28%)'
      }
    },
  },
  plugins: [],
}
