/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-red-500',
    'border-green-500',
    'border-blue-500',
    'border-black-500'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

