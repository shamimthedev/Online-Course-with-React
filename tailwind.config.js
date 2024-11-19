/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['Karma'],
      },
      colors: {
        buttonBg: '#F5C362',
        3131: '#313131',
        counterBg: '#0166FF',
      },
      boxShadow: {
        '3xl': '0 0 20px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}