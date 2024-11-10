/** @type {import('tailwindcss').Config} */
/** @type {import { jsPDF } from "jspdf"} */
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

