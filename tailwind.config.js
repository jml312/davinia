const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.jsx", "./pages/**/*.js"],
  important: true,
  theme: {
    extend: {
      colors: {
        light: "#f8f6eb",
        dark: "#141a20",
      },
      backgroundColor: {
        light: "#ebe8d8",

        linkUnderline: "#141a20",
      },
      fontFamily: {
        sans: ["Playfair Display", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
