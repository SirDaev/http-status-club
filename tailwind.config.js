/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'black': '#292929',
      'green': '#71C597',
      'green-lite': '#aacdb9',
      'white': '#EEEEEE'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px'
      },
    },
    fontFamily: {
      sans: ['Maven Pro', 'sans-serif'],
      serif: ['Rokkitt', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
