const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Merriweather": ['Merriweather', 'serif'],
        "MerriweatherSans": ['Merriweather Sans', 'sans-serif'],
      },
      colors: {
        'Rouge': '#F50F00',
        'Bordeaux': '#7A003F',
        'Doré': '#F0C300',
        'GrisClair': '#E0E0E0',
        'GrisMoyen': '#A1A1A1',
        'GrisFonce': '#4F4F4F'
      }

    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
