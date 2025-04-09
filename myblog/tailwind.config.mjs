/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          space: ['Space Grotesk', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
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