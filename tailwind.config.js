/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: `var(--themeColor)`,
        secondaryColor: `var(--secondaryColor)`,
        optionalColor: `var(--optionalColor)`,
      },
    },
  },
  plugins: [],
};
