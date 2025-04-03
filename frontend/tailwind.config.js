/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a83e8",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
