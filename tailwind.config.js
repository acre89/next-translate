/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    extend: {
      spacing: {
        150: "1696px",
      },
      colors: {
        primary: "#2A3691",
        secondary: "#51BBED",
        tertiary: "#959DA3",
        background: "#F5F5F5",
        card: "#FAFAFA",
        text: "#171717",
      },
    },
  },
  plugins: [],
};
