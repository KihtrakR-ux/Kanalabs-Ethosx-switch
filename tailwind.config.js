/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani"],
        dm_sans: ["DM Sans"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
