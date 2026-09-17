/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: '#F9F6F0',        // Teinte exacte demandée : beige lin / sable doux
          linen: '#F9F6F0',
          'linen-dark': '#F0ECE3',
          dark: '#063B39',        // Vert sombre/bleuté profond (structure & texte)
          'dark-soft': '#0A4B48',
          'dark-muted': '#105B58',
          terracotta: '#C55D45',  // Terracotta vibrant (accent & CTA)
          'terracotta-hover': '#B04F38',
          'terracotta-light': '#D6715A',
        },
        cream: {
          50: '#FFFFFF',
          100: '#F9F6F0',
          200: '#F0ECE3',
          300: '#E6E0D4',
          400: '#D8D0C0',
          500: '#BFB5A0',
        },
        sage: {
          50: '#F1F6F5',
          100: '#DDE9E8',
          500: '#0A4B48',
          600: '#063B39',
          700: '#042C2B',
          800: '#03201F',
          900: '#021615',
        },
        terracotta: {
          500: '#D6715A',
          600: '#C55D45',
          700: '#B04F38',
          800: '#8F3D29',
        },
        charcoal: {
          900: '#063B39',
        }
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(35, 25, 20, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'float': '0 20px 40px -15px rgba(35, 25, 20, 0.06), 0 0 1px 1px rgba(0, 0, 0, 0.03)',
        'lift': '0 20px 45px -10px rgba(35, 25, 20, 0.07), 0 3px 10px rgba(0, 0, 0, 0.03)',
        'glow-terracotta': '0 12px 30px -6px rgba(197, 93, 69, 0.38)',
        'glow-dark': '0 20px 40px -10px rgba(6, 59, 57, 0.35)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
};
