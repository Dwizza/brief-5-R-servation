/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'sans-serif'],
      },
      fontFamily:{
        LobsterTwo : ['Lobster Two', 'sans-serif']
      }, 
    },
  },
  plugins: [],
}

