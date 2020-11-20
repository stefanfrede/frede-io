const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: 'all',
  purge: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    colors: {
      black: colors.black,
      gray: colors.gray,
      pink: colors.pink,
      teal: colors.teal,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: [
          '"Gotham Rounded SSm A"',
          '"Gotham Rounded SSm B"',
          ...defaultTheme.fontFamily.sans,
        ],
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
