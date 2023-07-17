/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
        Doppio: ['Doppio One'],
        Kodchasan: ['Kodchasan'],
        Overpass: ['Overpass'],
        Koho: ['KoHo']
      },

      colors: {
        primary: {100: '#F33535'},
        primary: {200: '#FA4C4C'},
        secondary: {100: '#FFFAFA'}
      },

      backgroundImage: {
        grad: 'linear-gradient(179.78deg, rgba(243, 53, 53, 0.81) -12.71%, rgba(255, 250, 250, 0) 122.57%);',
        image1: "url('images/src/images/backgroundImg.png')",
        wavy1: "url('./src/images/image 13 (1).png')",
        wavy2: "url('./src/images/image 12.png')",
        contact: "url('./src/images/Group 1000004418.png')",
        footer: "url('./src/images/Footer.png')"
      },

      screens: {
        'xsm': '400px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],

 
}

