/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    'sm:col-span-1',
    'sm:col-span-2',
    'sm:col-span-4',
    'col-span-1',
    'col-span-2',
    'col-span-4',
    'hover:cursor-pointer',
    'flex-col',
    'justify-end'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

