/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      poppins: "Poppins",
      shantell: "Shantell Sans",
      tiltNeon: "Tilt Neon",
    },
    screens: {
      pc: "1021px",
      tablet: "731px",
      phone: "421px",
    },
    extend: {},
  },
  plugins: [],
};
