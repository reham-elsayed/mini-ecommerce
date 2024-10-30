/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'576px',
        md:'768px',
        lg:'1200px',
        '2xl':'1400px',
      }
    },
  },
  plugins: [],
}

