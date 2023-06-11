/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "night", "cyberpunk"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
      // Ensure fonts with spaces have " " surrounding it.
    },
    poppins: ["Poppins", "sans-serif"],
    balonFont: ["Rubik Puddles", "cursive"],
  },
  plugins: [require("daisyui")],
};
