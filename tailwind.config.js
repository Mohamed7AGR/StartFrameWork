import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main:"#2C3E50",
        green:"#1ABC9C",
      },
      container:{
        center: true,
      }
    },
  },
  plugins: [flowbite],
};
