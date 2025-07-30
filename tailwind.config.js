/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust path as per your project structure
  ],
  darkMode: "class", // Enable dark mode via class
  theme: {
    extend: {
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 1s ease-out forwards',
        'fade-in-right': 'fade-in-right 1s ease-out forwards',
      },
      colors: {
        brand: {
          DEFAULT: "#ec7e35",
        },
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
