/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './public/index.html',        
    './src/components/MovieCard.js',
    './src/pages/SearchPage.js',
    './src/pages/MovieDetails.js'
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#1f2937', 
        secondary: '#3b82f6', 
        accent: '#f97316', 
        background: '#f3f4f6', 
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'], 
        heading: ['Poppins', 'sans-serif'], 
      },
      spacing: {
        '128': '32rem', 
        '144': '36rem', 
      },
      screens: {
        '2xl': '1536px', 
      },
    },
  },
  plugins: [],
};
