
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // ...colors,
      black: colors.black,
      blackDark: '#1C1C1E',

      white: colors.white,

      gray: {
        'l-01': '#8E8E93',
        'l-02': '#AEAEB2',
        'l-04': '#D1D1D6',
        'l-05': '#E5E5EA',
        'l-06': '#F2F2F7',

        'd-01': '#AEAEB2',
        'd-02': '#7C7C80',
        'd-04': '#3A3A3C',
        'd-05': '#363638',
        'd-06': '#2C2C2E',
        ...colors.gray
      },
      blue: {
        'l-01': '#007AFF',
        'd-01': '#0A84FF',
        ...colors.blue
      },
      green: {
        'l-01': '#34C759',
        'd-01': '#32D74B',
        ...colors.green
      },
      yellow: {
        'l-01': '#ECB017',
        ...colors.yellow
      },
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      red: colors.red,
      orange: colors.orange,
      teal: colors.teal,
      cyan: colors.cyan,
      brown: colors.brown,

    },
    extend: {
      opacity: {
        '15': '0.15',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
  },
  plugins: []
}