/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:  {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'backannoun': "url(https://www.hdcarwallpapers.com/walls/2020_bentley_continental_gt_v8_4k-HD.jpg)",
      },
      backgroundVideo: {
        'backvideo' : 'url(https://www.astonmartin.com/-/media/ny-flagship-opening/flagship_ny_opening_desktop.mp4?rev=d89305010aee4a389faff3869184ace3)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
      colors: {
        textbtncolor: '#00665E',
        bgbtn: 'rgba(255,255,255,1);',
        navbg: 'rgba(0,0,0,.45)',
      },
      boxShadow : {
        '3xl' : '0px 1px 4px rgba(0, 64, 58, 0.1), inset 0px -1px 0px rgba(0, 64, 58, 0.1);'
      },
      screens: {
        '2xl': {'max': '1535px'},
        
  
        'xl': {'max': '1279px'},

  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},

  
        'sm': {'max': '639px'},

      },
    },
  },
  plugins: [],
}
