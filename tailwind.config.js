/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg-color': '#333',
        'card-color': '#f2f2f2',
      },
    },
  },
  plugins: [],
}
