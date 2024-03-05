/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '10px'
    },
    
    extend: {
      colors: {
        primary: '#F16B4E',
        secondary: '#232323',
        dark: '#1F1F1F',
        darkgray: '#121212'
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        bebas: ["Bebas Neue"],
        mont: ["Montserrat"]
    },
    },
  },
  plugins: [],
}

