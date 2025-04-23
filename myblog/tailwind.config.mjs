/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          space: ['Space Grotesk', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          playfair: ['Playfair Display', 'serif'],
        },
        colors: {
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03',  // Darker amber for better contrast
          },
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        boxShadow: {
          'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        },
        backgroundImage: {
          'grid-pattern': 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
        },
        backgroundSize: {
          'grid': '24px 24px',
        },
      },
    },
    plugins: [],
  }

  module.exports = {
    content: [
      "./src/**/*.{astro,html,js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
        },
      },
    },
    plugins: [],
  };