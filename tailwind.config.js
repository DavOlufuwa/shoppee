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
      'tablet':'768px',
      'palmtop':'900px',
      'laptop':'1280px',
      'tv':'1536px'
    },
    colors:{
      primary:{
        'brand': '#b744b8',
        'brand-hover': '#d48bd5',
        'brand-inactive': '#f0d6f0',
        'brand-disabled': '#e3e3e3',
      },
      secondary:{
        'plum': '#4c49b1',
        'plum-hover': '#6d6bc2',
        'plum-inactive': '#d8d7ef',
        'plum-disabled': '#e3e3e3',
      },
      background:{
        'primary': '#f7f7f7',
        'secondary': '#fbf4fb',
        'secondary-hover': '#969696'
      },
      text:{
        'primary': '#fff',
        'secondary': '#b744b8',
        'tetiary': '#4c49b1',
      }
    },
    extend: {
      screens:{
        'hover-none': {'raw': '(hover: none)'},
        'sharp-nav': {'raw':"(max-width: 1350px)" }
      }
    },
  },
  plugins: [],
}

