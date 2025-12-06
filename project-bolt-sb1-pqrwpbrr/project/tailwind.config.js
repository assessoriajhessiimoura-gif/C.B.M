/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose-nude': '#E8C5B5',
        'cappuccino': '#8B7355',
        'verde-medio': '#4A7C59',
        'bege-champagne': '#F5E6D3',
        'cinza-porcelana': '#E8E4E0',
        'dourado-suave': '#D4AF87',
        'laranja-claro': '#FFE5D9',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
