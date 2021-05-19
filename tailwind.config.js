module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  prefix: 'tw-'
}
