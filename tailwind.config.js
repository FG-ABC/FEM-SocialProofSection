/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(300, 43%, 22%)",
        secondary: "hsl(333, 80%, 67%)",
      },
    },
  },
  plugins: [],
};
