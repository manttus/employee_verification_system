/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D54435",
      },
      width: {
        "card-width": "376px",
      },
    },
  },
  plugins: [],
};
