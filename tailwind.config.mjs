/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#140530",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Outfit: ["Outfit", "serif"],
      },
      boxShadow: {
        balck: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
        shadowhh: "4px 4px 5px rgba(0, 0, 0, 0.5)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(400px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
