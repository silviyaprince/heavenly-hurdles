/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Cinzel"],
      },
      colors: {
        primary1: "#173F5F",
        primary2: "#20639B",
        primary3: "#1995AD",
        secondary1: "#A1D6E2",
        secondary2: "#FFE380",
        secondary3: "#FF80A8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio')
  ],
};
