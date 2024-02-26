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
        xxxs: '350px',
        xxs: "400px",
        xxms: "440px",
        xmxs: "540px",
        xs: "565px",
        xxsm: '605px',
        xsm: '660px',
        smd: "700px",
        smmd: "740px",
        ssmd: "800px",
        navRes: "860px",
        cardRes: "880px", 
        lmd: '945px',
        mlg:"1100px",
        mslg: "1028px",
        mmlg: "1270px"
      },
      fontFamily: {
        poppins: ['"Poppins"',  ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
