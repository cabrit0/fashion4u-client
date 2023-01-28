/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lux-purple": "#7b1fa2",
        "lux-pink": "#ff4081",
        "lux-blue": "#0277bd",
        "lux-green": "#00e676",
        "lux-orange": "#ff5722",
        "lux-yellow": "#ffeb3b",
        "lux-gray": "#9e9e9e",
      },
      fontFamily: {
        Rampart: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
