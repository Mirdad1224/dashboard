/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IRANSans']
      },
      backgroundImage: {
        custom: 'linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)',
        secondary: 'linear-gradient(127.09deg, rgba(34, 41, 78, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)'
      }
    },
  },
  plugins: [],
}
