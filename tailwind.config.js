// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        background: "#F9F9F9",
        accent: "#374151",
        dark: "#374151",
        light: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
