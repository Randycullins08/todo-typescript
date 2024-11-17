// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        secondary: "#FF9800",
        background: "#F9F9F9",
        accent: "#374151",
        dark: "#374151",
        light: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
