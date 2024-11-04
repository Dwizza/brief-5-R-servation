/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index/**/*.{html,js}"],
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

