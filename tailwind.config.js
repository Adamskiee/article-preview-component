/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        "desktop": "1439px"
      },
      colors: {
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "dark-blue": "var(--dark-blue)",
        "grayish-blue": "var(--grayish-blue)",
        "light-grayish-blue": "var(--light-grayish-blue)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}

