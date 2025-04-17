/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "sans-serif"], // Add Lexend as the default sans-serif font
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(to right, #55C05B, #CFDE60)", // Fixed closing bracket
        "gradient-green-revert": "linear-gradient(to right, #CFDE60, #55C05B)", // Fixed closing bracket
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in-out",
        slideOut: "slideOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
