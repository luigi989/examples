module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {    
    extend: {
      backgroundColor: {
        dark: '#34495e',
        dark_secondary: '#2c3a47',
        light: '#ffffff',
        light_secondary: '#edf2f7',
      },
      textColor: {
        dark: '#ffffff',
        dark_secondary: '#999ca0',
        dark_accent: '#e66767',
        light: '#2d3748',
        light_secondary: '#4a5568',
        light_accent: '#2b6cb0',
      },
      colors: {
        deepblue: '#2d3748',
        orangered: '#ca1f1f',
        khaki: '#92530b',
      },
      backgroundImage: {
        'astronaut': "url('../src/login_forms/pics/Astronaut.png')",
      },
      animation: {
        moveWidth: 'moveWidth100 0.5s linear', 
        moveWidthInfin: 'moveWidth100 3s linear infinite', 
        moveWidth75Infin: 'moveWidth75 3s linear infinite', 
        moveWidth50Infin: 'moveWidth50 3s linear infinite',
        moveHeight: 'moveHeight 0.5s linear', 
        moveHeightInfinite: 'moveHeight 0.5s linear infinite', 
        scale: 'scaleUp 1.5s linear infinite',
        spinSlow: 'spin 3s linear infinite',
        slideSlow: 'slideSlow 1s linear',
      },
      keyframes: {
        slideSlow: {
          '100%': { width: '100%' },
        },
        scaleUp: {
          '50%': { transform: 'scale(1.2)'},
        },
        moveWidth50: {
          '99%': { width: '50%' },
        }, 
        moveWidth75: {
          '99%': { width: '75%' },
        }, 
        moveWidth100: {
          '99%': { width: '100%' },
        }, 
        moveHeight: {
          '99%': { height: '100%' },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}