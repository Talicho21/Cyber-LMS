/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
    colors: {
      navy: {
        900: "#1B2340",
        800: "#2A3560",
        600: "#4A5580",
        200: "#C5CADE",
        100: "#EEF0F7",
      },
      lemon: {
        500: "#A8D400",
        100: "#F4FBCC",
        600: "#7A9C00",
      },
      surface: {
        card: "#FFFFFF",
        muted: "#8892AA",
      },
      info: "#1976D2",
      warning: "#FFC107",
      danger: "#E53935",
    },
  },
},
  plugins: [],
};