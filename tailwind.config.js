/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F364A",
        buttonBG: "#477C99",
        cardBG: "#9BBEC8",
        customRed: "#FF0C0C",
        formBG: "#477c99",
        formBorder: "#59E3F5",
      },
      screens: {
        xxs: "400px",
        xs: "565px",
        smd: "700px",
        navRes: "860px",
        cardRes: "880px",
      },
      fontFamily: {
        poppins: ['"Poppins"',  ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
