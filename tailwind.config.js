/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      mobile: { max: '639px' },
      desktop: '640px',
    },
  },

  plugins: [],
};
