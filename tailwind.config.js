/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#060408',
          900: '#0a0710',
          850: '#110c19',
          800: '#181123',
          700: '#241a34',
        },
        wine: {
          950: '#17030a',
          900: '#270612',
          800: '#43091e',
          700: '#640d2d',
          600: '#89143f',
          500: '#b21c54',
        },
        rose: {
          50: '#fff1f4',
          100: '#ffe4e8',
          200: '#fecdd7',
          300: '#fda4b8',
          400: '#fb7194',
          500: '#f43f70',
        },
        gold: {
          300: '#fef08a',
          400: '#facc15',
          500: '#eab308',
          accent: '#e6ca65',
        },
        champagne: {
          100: '#faf6ee',
          200: '#f4ecdc',
          300: '#ebd9ba',
          400: '#dfbe8e',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(251, 113, 148, 0.25)',
        'glow-md': '0 0 30px -5px rgba(251, 113, 148, 0.35)',
        'glow-lg': '0 0 50px -10px rgba(251, 113, 148, 0.45)',
        'glow-gold': '0 0 35px -5px rgba(230, 202, 101, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(251,113,148,0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(251,113,148,0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 4s linear infinite',
      }
    },
  },
  plugins: [],
}
