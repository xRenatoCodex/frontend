/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Azul fuerte
          secondary: "#9333EA", // Morado intenso
          accent: "#FACC15", // Amarillo vibrante
          muted: "#6B7280", // Gris medio
        },
      },
    },
    plugins: [],
  };
  