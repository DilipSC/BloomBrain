/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        silver: '#C0C0C0',
        'silver-dark': '#A9A9A9',
        midnight: '#2C2F33',
        'midnight-light': '#36393F',
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
        "slide-in-left": "slideInLeft 1s ease-out",
        "slide-in-right": "slideInRight 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
