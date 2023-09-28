/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pressable: '#670CF8',
        "pressable-secondary": '#9454FC',
        "text-primary": '#C0CCCC',
        "text-secondary": "#7E757E"
      }
    },
  },
  plugins: [],
}

