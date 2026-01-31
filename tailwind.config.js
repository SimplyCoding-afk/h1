/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0c0c0c', // Your dark background color
        sunset: '#253237', // Your starting sky color
      }
    },
  },
  plugins: [],
}