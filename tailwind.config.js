const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md'],
  darkMode: false,
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      pink: colors.pink,
      teal: colors.teal,
      white: colors.white,
    },
    extend: {
      gridTemplateColumns: {
        layout: 'minmax(14rem, 1fr) auto minmax(14rem, 1fr)',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      margin: {
        '2px': '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
