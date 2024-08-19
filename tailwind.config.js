/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta la ruta según tu proyecto
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',          // Blanco
        foreground: '#1b1f23',          // Gris oscuro
        card: '#ffffff',                // Blanco
        'card-foreground': '#1b1f23',   // Gris oscuro
        popover: '#ffffff',             // Blanco
        'popover-foreground': '#1b1f23',// Gris oscuro
        primary: '#8c52fe',             // Púrpura
        'primary-foreground': '#f0f8ff',// Casi blanco
        secondary: '#e2e8f0',           // Gris claro
        'secondary-foreground': '#2d3748', // Gris oscuro
        muted: '#e2e8f0',               // Gris claro
        'muted-foreground': '#718096',  // Gris medio
        accent: '#e2e8f0',              // Gris claro
        'accent-foreground': '#2d3748', // Gris oscuro
        destructive: '#e53e3e',         // Rojo
        'destructive-foreground': '#f0f8ff', // Azul claro
        border: '#cbd5e0',              // Gris claro
        input: '#cbd5e0',               // Gris claro
        ring: '#4f46e5',                // Azul
      },
      
      borderRadius: {
        DEFAULT: '0.5rem', 
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],  // Fuente para body
        heading: ['Inter', 'sans-serif'], // Fuente para encabezados
      },
    },
  },
  plugins: [],
};
