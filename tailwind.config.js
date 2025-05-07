/** @type {import('tailwindcss').Config} */
function withOpacityValue(variable) {
  return ({ opacityValue }) =>
      opacityValue !== undefined
          ? `rgba(var(${variable}), ${opacityValue})`
          : `rgb(var(${variable}))`;
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Colors
          primary: {
            DEFAULT: '#00205B',  // New deep navy blue base
            light: '#003494',    // Lighter shade, better contrast with base
            dark: '#001845',     // Darker for depth
            hover: '#002B7A'     // Middle ground for hover state
          },
          secondary: {
            DEFAULT: '#D4A373', // Warm Sepia
            light: '#E1BA96',
            dark: '#B88A5C',
            hover: '#C79666'
          },
          background: {
            DEFAULT: '#FDFFF7', // New cream background
            light: '#FFFFF7',   // Slightly lighter than default
            dark: '#F5F7EF',    // Slightly darker than default
            paper: '#FFFFFF'    // Pure white for cards
          },
          accent: {
            green: {
              DEFAULT: '#2D4739',
              light: '#3D5F4C',
              dark: '#1E3026'
            },
            burgundy: {
              DEFAULT: '#732F2F',
              light: '#8F3B3B',
              dark: '#572424'
            }
          },
          // Text Colors System
          text: {
            primary: '#1A1C18',    // Darker main text for better contrast
            secondary: '#2F353B',   // Secondary text
            tertiary: '#4A5056',    // Subtle text
            inverse: '#FFFFFF',     // Text on dark backgrounds
            link: '#732F2F',        // Link color (burgundy)
            linkHover: '#572424',   // Darker link color
            disabled: '#A8AAA5',    // Disabled text
            success: '#2D5A27',     // Success messages
            error: '#A63D40',       // Error messages
            warning: '#CF9F5D',     // Warning messages
          },
          // State Colors
          state: {
            success: {
              DEFAULT: '#2D5A27',
              light: '#367A2F',
              dark: '#234620'
            },
            error: {
              DEFAULT: '#A63D40',
              light: '#BF4548',
              dark: '#8C3235'
            },
            warning: {
              DEFAULT: '#CF9F5D',
              light: '#DDB27A',
              dark: '#B88D4A'
            }
          }
        },
        nagcnl: {
          white: withOpacityValue('--color-nagcnl-white'),
          black: withOpacityValue('--color-nagcnl-black'),
          yellow: withOpacityValue('--color-nagcnl-yellow'),
          orange: withOpacityValue('--color-nagcnl-orange'),
          green: withOpacityValue('--color-nagcnl-green'),
          'green-light': withOpacityValue('--color-nagcnl-green-light'),
          'green-dark': withOpacityValue('--color-nagcnl-green-dark'),
          red: withOpacityValue('--color-nagcnl-red'),
          tan: withOpacityValue('--color-nagcnl-tan'),
          'gray-79': withOpacityValue('--color-nagcnl-gray-79'),
          'gray-70': withOpacityValue('--color-nagcnl-gray-70'),
          'gray-b9': withOpacityValue('--color-nagcnl-gray-b9'),
          'gray-74': withOpacityValue('--color-nagcnl-gray-74'),
        },
        socials: {
          facebook: "#1877f2",
          youtube: "#ff0000"
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
        lora: ['Lora', 'serif'],
        opensans: ['Open Sans', 'sans-serif']
      },
      screens: {
        // Namespaced custom breakpoints
        'bs-xs': '0px',
        'bs-sm': '576px',
        'bs-md': '768px',
        'bs-lg': '992px',
        'bs-xl': '1200px',
        'bs-xxl': '1400px',
        'bs-xxxl': '1650px',
      }
    }
  }
}