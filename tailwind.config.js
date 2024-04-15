/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "#0cce6B",
      gray: "#f4f5f6",
      darkGray: "#363537",
      darkBlue: "#2b4162",
    },
    screens: {
      md: "900px",
      sm: "600px",
    },
    extend: {},
  },
  plugins: [],
};
