const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
        25: '6.25rem',
        35: '8.75rem',
      },
      flexGrow: {
        1: 1,
        2: 2,
        3: 3,
      },
      fontFamily: {
        pacifico: 'Pacifico',
      },
      gridTemplateColumns: {
        '5-auto': 'repeat(5, auto)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-1': {
          transform: 'rotateY(1deg)',
        },
        '.rotate-y-2': {
          transform: 'rotateY(2deg)',
        },
        '.rotate-y-3': {
          transform: 'rotateY(3deg)',
        },
        '.rotate-y-6': {
          transform: 'rotateY(6deg)',
        },
        '.rotate-y-12': {
          transform: 'rotateY(12deg)',
        },
        '.rotate-y-45': {
          transform: 'rotateY(45deg)',
        },
        '.rotate-y-90': {
          transform: 'rotateY(90deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }),
  ],
};
