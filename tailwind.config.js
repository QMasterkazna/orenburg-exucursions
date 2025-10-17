/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          500: '#2c5530',
          600: '#244627',
          700: '#1c371f',
        },
        accent: {
          500: '#ff6b35',
          600: '#e55a2b',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}