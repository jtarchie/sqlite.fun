/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "content/**/*.{html,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
};
