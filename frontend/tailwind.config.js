import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif'], 
        airone: ['Airone', 'sans-serif'],
        integral: ['Integral', 'sans-serif'],
      },
      colors: {
        "brand-color": "#FF5252",
        "alt-black": "#192e36",
        "soft-black": "#151515",
        "light-gray": '#818181',
        "icon-color": '#b3b3b3',
        "silver": "#CCCCCC",
        "alt-gray": "#e1e1e1"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}