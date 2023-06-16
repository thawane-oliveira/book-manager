import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '512px',
    },
    extend: {},
  },
  plugins: [],
}

