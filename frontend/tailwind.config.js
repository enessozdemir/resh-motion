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
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "brand-color": "#FF5252",
        "alt-black": "#192e36",
        "soft-black": "#151515",
        "light-gray": '#818181',
        "icon-color": '#b3b3b3',
        "silver": "#b3b3b3",
        "alt-gray": "#e1e1e1"
      },
      backgroundImage: {
        'dots': `
          repeating-linear-gradient(45deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 10px, transparent 10px, transparent 11px),
          repeating-linear-gradient(135deg, rgb(255, 255, 255) 0px, rgb(255, 255, 255) 10px, transparent 10px, transparent 11px),
          linear-gradient(90deg, hsl(256, 7%, 84%), hsl(256, 7%, 84%))
        `,
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}