/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors:{
        "companies":"#FBEBD7" 
      },
      listStyleImage:{
        "star" : "url('../my-project/src/assets/ph_star-four-fill.png')"
      }
    },
  },
  plugins: [],
}

