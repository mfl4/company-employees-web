/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        purple: "0 0 2em #646cffaa",
      },
    },
  },
  plugins: [daisyui],
};
