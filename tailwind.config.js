// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#003366', // A nice shade of navy blue
          light: '#004080', // A lighter shade of navy, adjust as needed
          dark: '#002244', // A darker shade of navy, adjust as needed
          darker: '#001a33', // A very dark shade of navy, adjust as needed
          darkest: '#000d1a', // The darkest shade of navy, adjust as needed
        },
        red: {
          DEFAULT: '#8C0E0F',
          darker: '#5B0A0B'
        },
        gold: {
          DEFAULT: '#FFD700', // A vibrant gold
          light: '#FFDF00', // A lighter gold, adjust as needed
          dark: '#CCAC00', // A darker gold, adjust as needed
          darker: '#B49900', // A very dark gold, adjust as needed
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}