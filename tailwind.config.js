/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/JSX/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        light: ["light", "sans-serif"],
        regular: ["regular", "sans-serif"],
        medium: ["medium", "sans-serif"],
        bold: ["bold", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        serif: ["mont", "sans-serif"],
        nun: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
