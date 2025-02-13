/**  @type {import('tailwindcss').Config}*/
module.exports = {
  content: [],
  theme: {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
    extend: {
      colors: {
        mdcTheme: '#282828', // Define a reusable color
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
