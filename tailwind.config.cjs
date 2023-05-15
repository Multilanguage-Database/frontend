const typography = require("@tailwindcss/typography");
const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
};

module.exports = config;
