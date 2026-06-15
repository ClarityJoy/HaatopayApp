/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        haat: {
          red: "#C8102E",
          redLight: "#E63946",
          yellow: "#F7C948",
          yellowLight: "#FFE08A",
          dark: "#1A1A1A",
          cream: "#FFF9F0",
        },
      },
      fontFamily: {
        serif: ["Cambria", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
