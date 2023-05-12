/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        pro: ['Be Vietnam Pro'],
      },
      colors: {
        sky: '#0099ff',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        animate: {
          '0%,10%,100%': {
            width: '0%',
          },
          '70%,80%,90%': {
            width: '100%',
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
    animation: {
      animate: 'animate 3s linear infinite',
      spin: 'spin 1s linear infinite',
    },
  },
  plugins: [],
};
