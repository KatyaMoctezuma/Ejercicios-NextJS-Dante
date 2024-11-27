import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CustomFont', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#1A202C',
        secondary: '#4A5568',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
});
