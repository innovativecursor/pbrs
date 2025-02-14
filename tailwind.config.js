/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'], // Correct placement
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        albertSans: ['Albert Sans', 'sans-serif'],
      },
      colors: {
        mdcTheme: '#282828', // Define a reusable color
      },
    },
  },
  plugins: [],
}
