module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#5cb85c",
        'secondary-hover': "#449d44",
        primary: "#b85c5c",
        'primary-hover' : '#b85c5c',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
