/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gidiYellow: "#f8c806",
        deepYellow: "#f8c806",
        darkText: "#737373",
        borderColor: "#333333",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "425px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
      backgroundImage: {
        bgOne: "url('/assets/bgOne.webp')",
        bgTwo: "url('/assets/bgTwo.webp')",
        bgThree: "url('/assets/bgThree.webp')",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      gridTemplateColumns: {
        header: "15% 67% 15%",
        "header-small": "15% 30% 20%",
      },

      boxShadow: {
        customShadowOne: "0px 0px 15px 1px rgba(0,0,0,0.88);",
      },
      fontFamily: {
        bodyFont: ["Poppins"],
      },
    },
  },
  plugins: [],
};
