/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'club': {
          'primary': '#003366',    // Azul marino del logo
          'secondary': '#FD6F01',  // Naranja del logo
          'light': '#E6EEF5',     // Azul claro para fondos
          'dark': '#001F3F'       // Azul oscuro para textos
        }
      }
    },
  },
  plugins: [],
};