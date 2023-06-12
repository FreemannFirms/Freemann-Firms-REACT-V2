/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': "#fCFCFC",
        'black': "#000",
        cool: "#f7f7f7",
        primaryColor: "#a503a8",
        secondaryColor: "#680097",
        tertiaryColor: "#d600b1",
        extraEffect: "#d3b703",
      },
      fontFamily: {
        sans: ['Poppins', 'Graphik', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('daisyui', 'flowbite/plugin')
  ],
}