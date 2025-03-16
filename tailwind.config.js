import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pri-green": {
          50: "#F7FEE7",
          100: "#F2FED8",
          800: "#647C75",
          850: "#526660"
        },
        "sec-blue":{
          100: "#E2E8F0",
          150: "#CBD5E1",
          700: "#61859C",
          800: '#3A5668',
        }
      },
      boxShadow: {
        "item": "8px 8px 400px rgba(72, 105, 51, 0.15)"
      }
    },
  },
  plugins: [tailwindcssAnimate],
}

