/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
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
    './shopify/**/*.liquid',
    './src/**/*.{tsx,ts,jsx,js}'
  ],
};
