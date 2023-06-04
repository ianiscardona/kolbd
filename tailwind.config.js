/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        coming: ["Coming Soon", "cursive"],
        loveya: ["Love Ya Like A Sister", " cursive"],
      },
    },
  },
  plugins: [],
};
