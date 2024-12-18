/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './node_modules/flowbite-react/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ]
}
