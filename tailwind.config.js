/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': 'url("/images/banner.webp")',
      },
      colors: {
        // brand: {
        //   main: "#01B3F1",
        //   light: "#E6F7FF",
        //   dark: "#0077A9",
        // },
        brand: {
          main: "#4CAF50", // Greenish main color
          light: "#E6FFED", // Light greenish color
          dark: "#388E3C", // Dark greenish color
        },
        text: {
          dark: "#212529",
          light: "#666"
        }
      }
    },
  },
  plugins: [],
};
