/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./partials/**/*.html"],
  safelist: ['md:flex', 'hover:underline', 'hidden', 'block'],
  theme: {
    extend: {},
  },
  plugins: [],
};
