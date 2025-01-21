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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#222",
        medDark: "#666",
        neutral: "#247BA0",
        light: "#1B98E0",
        grey: "#E8F1F2",
        textGray: "#7c8198",
        orange: "#ea8b57",
      },
      screens: {
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "576px" },
        "3xl": { min: "1690px" },
        "min-md": { min: "768px" },
        "min-lg": { min: "1024px" },
        "min-sm": { min: "576px" },
      },
    },
  },
  plugins: [],
};
