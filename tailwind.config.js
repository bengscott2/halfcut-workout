/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.tsx", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pressable: '#670CF8',
        "text-primary": '#C0CCCC'
      }
    },
  },
  plugins: [],
}

