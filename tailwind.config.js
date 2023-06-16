import { duration } from '@mui/material'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/AboutUs/img.jpg')",
      },
      colors: {
        'regal-grad1': '#006e3c',
        'regal-grad2': '#84fc46',
        'regal-grad3': '#125901',
        'gold':'#FFD700'
      },
      fontFamily:{
        paraFont:['Roboto Slab', 'serif']
      }
      
    },
  },
  plugins: [],
}