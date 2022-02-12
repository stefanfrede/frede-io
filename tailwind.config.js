const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
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
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
