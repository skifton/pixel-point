/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        extralight: 275,
      },
      fontFamily: {
        roboto: ["Roboto"],
        poppins: ["Poppins"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px #D383FC",
      },
    },
  },
  plugins: [],
};
