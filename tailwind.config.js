module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'orange': '#d1600c'
    },
    minWidth: {
      '50': '50%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
