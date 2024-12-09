/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#191919',
        darkerGray: '#111111',
        lightGray: '#555555',
        lighterGray: '#AEAEAE',
        lightestGray: '#E5E5E5',
        softWhite: '#F4F4F4',
        offWhite: '#FFFEFA',
        peach: '#F2AC84',
        lavendar: '#B49BFC',
        pastelBlue: '#B6CAFF',
        teal: '#4CB7A3',
      },
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
