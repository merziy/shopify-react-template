/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require("path");

module.exports = {
  // Important set to a selector will add a .tw scope to tailwind styles.
  // Add this class to a root element where you want to use tailwind.
  important: ".tw",
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      transparent: "transparent",
      black: "#212222",
      red: "#FF0000",
    },
  },
  plugins: [],
  content: [
    path.resolve(__dirname, "**/*.{js,jsx}"),
    path.resolve(__dirname, "../shopify/**/*.liquid"),
  ],
};
