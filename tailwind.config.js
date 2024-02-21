/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F364A",
        buttonBG: '#477C99',
        cardBG: '#9BBEC8',
        customRed: '#FF0C0C',
        formBG: '#477c99',
        formBorder: '#59E3F5'
      },
      screens: {
        navRes: "860px",
        xs: '565px',
        cardRes: '880px',
      },
    },
  },
  plugins: [],
};

