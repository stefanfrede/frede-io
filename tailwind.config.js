const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      pink: colors.pink,
      teal: colors.teal,
      white: colors.white,
    },
    fontWeight: {
      medium: 470,
      semibold: 620,
      bold: 760,
    },
    extend: {
      fontFamily: {
        sans: ['Pangram Sans Rounded', ...defaultTheme.fontFamily.sans],
      },
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
