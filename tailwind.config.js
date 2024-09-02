/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarytext: "#333333",
        lightgraytheme: "#FFFFFF",
        graytheme: "#F6F6F6",
        secondarycolor: "#00949B",
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      transitionProperty: {
        'width': 'width',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'expand': 'expand 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

