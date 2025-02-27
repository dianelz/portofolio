/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1E",
        foreground: "#111827",
        text: "#f8f8f2", 
        comment: "#6272a4", 
        cyan: "#8be9fd", // adding dracula theme colors 
        green: "#50fa7b",
        orange: "#ffb86c",
        pink: "#ff79c6",
        purple: "#bd93f9",
        red: "#ff5555",
        yellow: "#f1fa8c",
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
