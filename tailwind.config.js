/** @type {import('tailwindcss').Config} */ 

const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',


  theme: {
    extend: {
      colors: {
        ...defaultColors,
        'dark': '#141B29',
        'search': '#484D58',
        'summary': '#EADDFF',
        'green': '#00BDB0',
      },
      fontFamily: {
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}