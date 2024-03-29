/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js"
  ],
  theme: {
    screen:{
      'sm':'360px',
      'md':'720px'
    },
    extend: {}
  },
  plugins: [],
}