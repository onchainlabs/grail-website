/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "manrope-400": ["Manrope-400", "sans-serif"],
      "manrope-500": ["Manrope-500", "sans-serif"],
      "manrope-600": ["Manrope-600", "sans-serif"],
      "manrope-700": ["Manrope-700", "sans-serif"],
      "manrope-800": ["Manrope-800", "sans-serif"],
      "poppins-400": ["poppins-400", "sans-serif"],
      "poppins-500": ["poppins-500", "sans-serif"],
      "poppins-600": ["poppins-600", "sans-serif"],
      "poppins-700": ["poppins-700", "sans-serif"],
      "poppins-800": ["poppins-800", "sans-serif"],
    },
  },
  plugins: [],
};
