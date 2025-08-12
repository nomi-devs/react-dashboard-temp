// tailwind.config.js
const { COLORS } = require("./src/constants");
 
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        background: COLORS.background,
      },
    },
  },
  plugins: [],
};
