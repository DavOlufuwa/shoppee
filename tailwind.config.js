/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,tsx,ts}'
  ],
  important:"#root",
  theme: {
    screens:{
      'phone':'600px',
      'tablet':'640px',
      'palmtop':'900px',
      'laptop':'1280px',
      'tv':'1536px'
    },
    extend: {
      screens:{
        'sharp-nav': {'raw':"(max-width: 1350px)" }
      }
    },
  },
  plugins: [],
}

