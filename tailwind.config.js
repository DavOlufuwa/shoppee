/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,tsx,ts}'
  ],
  important:"#root",
  theme: {
    fontSize:{
      'xs':[
        '0.5rem', {
          fontWeight:'400'
        }
      ],
      'sm':[
        '1rem', {
          fontWeight:'400',
          lineHeight:'160%',
          
        }
      ],
      'base':[
        '0.875rem', {
          fontWeight:'500',
        }
      ],
      'lg':[
        '1rem', {
          fontWeight:'700',
        }
      ],
      'xl':[
        '1.25rem', {
          fontWeight:'600',
          lineHeight:'150%'
        }
      ],
      '2xl':[
        '1.5rem', {
          fontWeight:'600',
          lineHeight:'150%'
        }
      ],
      '3xl':[
        '2rem', {
          fontWeight:'600',
          lineHeight:'125%'
        }
      ],
      '4xl':[
        '3rem', {
          fontWeight:'700',
          lineHeight:'110%'
        }
      ],
      '5xl':[
        '4rem', {
          fontWeight:'700',
          lineHeight:'110%'
        }
      ],
    },
    screens:{
      'phone':'600px',
      'tablet':'640px',
      'palmtop':'900px',
      'laptop':'1280px',
      'tv':'1536px'
    },
    extend: {
      colors:{
        custom:{
          'light':'#00DEB6',
          'mid':'#029278',
          'deep':'#001B17',
          'background':'#F0FFFC',
          'grey':'#758280',
          'footer':'#014137',
          'buttonbg':'#EAFDF9'
        }
      },
      screens:{
        'sharp-nav': {'raw':"(max-width: 1350px)" }
      },
      backgroundImage:{
        'hero': "url('./assets/images/hero-image.png')"
      },
    },
  },
  plugins: [],
}

