/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      boxShadow: {
        neon: "0 0 5px #444444, 0 0 20px #444444",
      },
      colors: {
        bgcol: "#F3F3F3",
        black: "#000000",
        lightgray: "#444444",
      },
      fontFamily: {
        neue: ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      fontWeight: {
        xxthin: 15,
        xthin: 25,
        light: 45,
        roman: 55,
        medium: 65,
      },
      backgroundImage: {
        proj: "url('./assets/projectspic.png')",
      },
    },
  },
  plugins: [],
};
