/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/antd/dist/antd.css",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "b-col": "#92D2FF",
      },
    },
  },
  plugins: [],
};
