/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050B14',
          900: '#0A172A',
          850: '#0D1F38',
          800: '#11284A',
          700: '#183B6C',
          600: '#245296',
          500: '#2E63B2',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E7B2',
          hover: '#E5C04B',
          dark: '#9A7A1B',
          50: '#FCF8EE',
          100: '#F9F1DC',
          200: '#F3E3B9',
          300: '#ECD191',
          400: '#E4BE67',
          500: '#D4AF37',
          600: '#B89025',
          700: '#8C6C16',
        },
        hydrangea: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          muted: '#F5F1E8',
          dark: '#EAE4D7',
        },
        cafe: '#0A172A',
        wine: '#0E2445',
        champagne: '#FAF4E4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.25)',
        'gold-subtle': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'navy-card': '0 20px 50px rgba(5, 11, 20, 0.35)',
      }
    },
  },
  plugins: [],
}
