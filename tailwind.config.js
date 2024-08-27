
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7AFFA1',
        secondary: '#FFF87C',
        tertiary: '#DDCBF5',
        accent: '#FFA27D',
        black: '#000000',
        white: '#FFFFFF',
        // New colors
        bgColor: '#101011', // Background color
        secondaryStuff: '#1b1b1b', // Secondary elements
        primary2: '#5542f6', // New primary color
        greenAccent: '#1fad99', // Green accent
        redAccent: '#d73304', // Red accent
        softPurple: '#b4a3d8', // Soft purple
        lightPurple: '#c8c2fc', // Light purple
            // New colors Discord 
            
        DbgColor: '#17181F', // Background color
        DsecondaryStuff: '#2b2d38', // Secondary elements
        Dprimary: '#7e56f0', // New primary color
        DText: '##fbf9ff', // Green accent
       

      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
});

