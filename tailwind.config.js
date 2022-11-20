/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        pixel : ['VT323','monospace']
      },
      colors: {
        'primary' : '#231651',
        'secondary' : '#4dccbd',
        'third' : '#d6fff6'
      }
      
    },
  },
  plugins: [],
}
