// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green
        secondary: "#FF9800", // Orange
        background: "#F9F9F9", // Light Gray
        accent: "#00BCD4", // Cyan
        dark: "#374151", // Dark Gray
        light: "#FFFFFF", // White
      },
    },
  },
  plugins: [],
};
