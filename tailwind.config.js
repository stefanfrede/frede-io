const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: 'all',
  purge: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        layout: 'minmax(14rem, 1fr) auto minmax(14rem, 1fr)',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      inset: {
        '-20': '-5rem',
      },
      spacing: {
        '2px': '2px',
      },
    },
    typography: {
      default: {
        css: {
          a: {
            color: 'hsl(220, 35%, 13%)',
            '&:hover': {
              color: 'hsl(331, 77%, 59%)',
              transitionDuration: '150ms',
              transitionProperty: 'color',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
          },
        },
      },
    },
  },
  variants: {
    inset: ['responsive', 'focus'],
  },
  plugins: [require('@tailwindcss/ui')],
};
