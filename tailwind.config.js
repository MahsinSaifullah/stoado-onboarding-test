/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#111111',
      },
      fontFamily: {
        aeonik: ['Aeonik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
