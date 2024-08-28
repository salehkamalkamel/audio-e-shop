/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: { max: '425px' }, // Max width of 425px for mobile
        tablet: { max: '768px' }, // Max width of 768px for tablet
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Assuming 'Manrope' is the primary font
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      colors: {
        primary: '#D87D4A', // Main brand color
        secondary: '#fbaf85', // Secondary color
        black: '#101010', // Black for text
        'black-body': '#C0C0C0',
        'black-1': '#191919',
        darkGray: '#CFCFCF', // Another dark tone
        lightGray: '#F1F1F1', // Light gray for backgrounds
        lighterGray: '#FAFAFA', // Even lighter gray
        white: '#FFFFFF', // Pure white
      },
      // Custom button styles
      padding: {
        'btn-x': '1.5rem', // Custom horizontal padding
        'btn-y': '0.75rem', // Custom vertical padding
      },
    },
  },
  plugins: [],
};
