/** @type {import('tailwindcss').Config} */
export default {
  content: 
    [
      './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
    ],
  theme: {
    
    extend: {
      colors: {
        meli_yellow : '#FFE600',
        meli_green : '#00A650',
        meli_gray: '#EBEBEB',
        meli_blue : '#3483FA'
      },
      fontFamily: {
        proximaNova: ["Proxima Nova", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    }
  },
  plugins: []
}
