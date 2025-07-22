/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Isso cobre todos os arquivos Vue, JS e TS dentro da pasta src
  ],
  theme: {
    //aqui defenimos as cores personalizadas
    extend: {
       colors: {
        'gold-custom': '#BA995A',
      },
      borderColor: {
        'gold-custom': '#BA995A',
      },
      backgroundColor:{
        'pricipal-background': '#161616',
      }
    },
  },
  plugins: [],
}