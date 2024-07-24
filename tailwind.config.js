/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        colors: {
          'broken-white':'#d5d1cb ',  // Adjust the hex code as needed
        },
        beige: {
          light: '#F5F5DC',
          DEFAULT: '#DCD5C7',
          dark: '#C5BAA1',
        },
        brown: {
          light: '#A52A2A',
          DEFAULT: '#8B4513',
          dark: '#5C4033',
        },
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
};
