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

      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

      colors: {
        ...defaultColors,
        'dark': '#141B29',
        'search': '#484D58',
        'summary': '#EADDFF',
        'deepGreen': '#027d75',
        'green': '#00BDB0',
        'lightGreen': '#10DC78',
        'redDown': '#F15950',
        'tableDark': '#09080B',
      },

      fontFamily: {
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}