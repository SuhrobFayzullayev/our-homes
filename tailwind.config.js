/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        proximanova: ["Proxima Nova"],
      },
    },
    // screens: {
    //   sm: "360px",
    //   md: "576px",
    //   lg: "768px",
    // },
  },
  plugins: [],
};
