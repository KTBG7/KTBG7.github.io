/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["./public/Montserrat-Regular.ttf"],
        montserratsemi: ["Montserrat-Medium"],
        montserratextra: ['Montserrat-ExtraBold'],
        poppinsmedium: ["Poppins-Medium"]
      },
      colors:{
        primary: "#ECF0F3",
        secondary: "#FE024F"
      }
    },
  },
  plugins: [],
}