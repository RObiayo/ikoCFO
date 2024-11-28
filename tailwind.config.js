/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-gradient-start': '#3b82f6', // Blue color
        'theme-gradient-middle': '#8b5cf6', // Purple color
        'theme-gradient-end': '#f43f5e', // Red color
      },
      backgroundImage: {
        'theme-gradient': 'linear-gradient(to right, #3b82f6, #8b5cf6, #f43f5e)', // Your gradient background
      },
    },
  },
  plugins: [],
}