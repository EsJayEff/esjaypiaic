  // tailwind.config.js
  module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    content: [],
    theme: {
       extend: {},
     },
     keyframe:{
      'open-menu':{
        '0%':{transform:'scaleY(0)'},
        '80%':{transform:'scaleY(1.2)'},
        '100%':{transform:'scaleY(1)'},
      },
     },
     animation:{
      'open-menu':'open-menu 0.5s ease-in-out forwards', 
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }