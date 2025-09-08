/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) translate3d(0, 0, 0)'
          },
          '25%': {
            transform: 'translate(-50%, -50%) translate3d(20%, 0, 0)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) translate3d(20%, 20%, 0)'
          },
          '75%': {
            transform: 'translate(-50%, -50%) translate3d(0, 20%, 0)'
          }
        }
      },
      animation: {
        blob: 'blob 5s infinite ease'
      }
    }
  }
});