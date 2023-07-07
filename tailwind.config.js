/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'cherryBomb': ['Cherry Bomb One', 'cursive'],
        'karla':['Karla', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(100px,1fr))'
      },
      height: {
        '128': '32rem',
        '192':'48rem',
        '196':'52rem',
        
      },
      backgroundColor: {
        'primary-1':'#ccc',
        'primary-2':'#ddd',
        'primary-3':'#eee',
        'secondary-1':'#ccc',
        'secondary-2':'#ddd',
        'secondary-3':'#eee',       
      },
      textColor: {
        'primary-1':'#ccc',
        'primary-2':'#ddd',
        'primary-3':'#eee',
        'secondary-1':'#ccc',
        'secondary-2':'#ddd',
        'secondary-3':'#eee',
      }
    },
  },
  plugins: [],
}
