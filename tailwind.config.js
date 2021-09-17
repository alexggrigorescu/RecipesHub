const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        top: "0px -5px 5px  rgba(0, 0, 0, 0.1)",
      },
      textColor: {
        primary: colors.black,
        secondary: colors.white,
      },
      colors: {
        primary: {
          light: colors.gray[100],
          DEFAULT: colors.gray,
          dark: colors.gray[800],
        },
        metalic: "#161818",
        newblue: "#417FA0",
        darkgray: "#242E34",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
