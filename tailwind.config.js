/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      phone: "450px",
    },
    extend: {
      fontFamily: {
        SpaceMono: ["monospace"],
      },
      colors: {
        lgcyan: "#C5E4E7",
        vlgcyan: "#F4FAFA",
        vdcyan: "#00494D",
        dgcyan: "#5E7A7D",
        scyan: "#26C0AB",
      },
    },
  },
  plugins: [],
};
