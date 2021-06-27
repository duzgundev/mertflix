module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#e50914',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
