import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ['"Source Serif 4"'],
    },
    extend: {
      colors: {
        "pri-green": {
          50: "#E6F5EA",
          100: "#DBF2EA",
          200: "#CFE5DF",
          300: "#BBD8D0",
          400: "#A2C2B9",
          500: "#8AAEA4",
          600: "#809790",
          700: "#638279",
          800: "#4D6760",
          900: "#384A44",
          1000: "#263631",
        },
        "sec-blue": {
          100: "#E4EAF2",
          200: "#CFD8E5",
          300: "#C3CCD9",
          400: "#B2C5D2",
          500: "#87AAC0",
          600: "#7196AE",
          700: "#66879C",
          800: "#49677A",
          900: "#3D5666",
          1000: "#202C35",
        },
      },
      "neutral-grey": {
        100: "#E9EFF2",
        200: "#DCE2E5",
        400: "#BAC6CC",
        500: "#9BA6AC",
        600: "#8F999E",
        800: "#5F696E",
        1000: "363A3C",
      },
      "warn-red": {
        100: "#F5E6E6",
        200: "#EBD3D3",
        300: "#D9BFBF",
        400: "#C48989",
        600: "#CC5252",
        700: "#A73A3A",
      },
      boxShadow: {
        item: "8px 8px 400px rgba(72, 105, 51, 0.15)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
