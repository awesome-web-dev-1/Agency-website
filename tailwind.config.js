/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        sora:["Sora","sans-serif"]
      },
      screens:{
        xs:'575px',
        sm:'768px',
        md:'992px',
        lg:'1200px',
        xl:'1400px'
      },
      colors:{
        bodyFontClr:'#7d7d7d',
        primaryClr:'#267DFF',
        secondaryClr:'#00D085',
        grayClr:'#7D7D7D',
        headerClr:'#222737'
      }
    },
  },
  plugins: [],
}

