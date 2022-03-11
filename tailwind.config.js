module.exports = {
  content: [    "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
        "6xl": "5000px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
