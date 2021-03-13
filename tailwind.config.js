module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        'x': 'auto 1fr auto',
        'projectRows': 'repeat(3, 500px)'
      },
      gridTemplateColumns: {
        'projectColumns': 'repeat(auto-fit, minmax(100px, 1fr))'
      }
    },
    screens: {
      'sm': '280px',
      'md': '768px',
      'lg': '1024px',
      'xl': "1280px",
      'xxl': "1536px"
    },
    fontFamily: {
      'sans': ['Inter']
    },
    colors: {
      'orange': '#d1600c',
      'charcoal': '#303030',
      'chocolate': '#1d1f21',
      'cream': '#c9cacc',
      'black': '#000'
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
