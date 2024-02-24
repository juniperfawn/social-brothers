/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#FAFAFA",
        customDarkGray: "#383838",
        customOrange: "#F27623",
      },
      backgroundImage: (theme) => ({
        "nav-image": "url('./assets/nav-background')",
      }),
    },
  },
  plugins: [],
};
