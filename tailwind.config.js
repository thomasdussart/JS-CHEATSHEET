module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: "#282c34",
        links: "aca5cf",
        border: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
