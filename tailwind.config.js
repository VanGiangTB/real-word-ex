module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#5cb85c",
        'secondary-hover': "#449d44"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
