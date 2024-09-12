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
      midGray: "#ecebeb",
      darkerGray: "rgb(221, 224, 227)",
      darkGray: "#363537",
      darkBlue: "#2b4162",
      white: "#fff",
    },
    screens: {
      lg: "1200px",
      md: "950px",
      sm: "700px",
    },
    extend: {
      boxShadow: {
        shadowEffect: "8px 8px 0px -1px rgb(12, 206, 107)",
      },
    },
  },
  plugins: [],
};
