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
    letterSpacing: {
      wide: ".14em",
    },
    extend: {
      colors: {
        primary: {
          light: "#3ab7ff", // Light shade of the primary color
          DEFAULT: "#0F0E24", // Default shade of the primary color
          dark: "#0056b3", // Dark shade of the primary color
        },
      },
    },
  },
  plugins: [],
};
