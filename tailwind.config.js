/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F364A",
        buttonBG: '#477C99'
      },
      screens: {
        navRes: "860px",
        xs: '565px',
        cardRes: '880px'
      },
    },
  },
  plugins: [],
};
