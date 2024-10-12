export default defineNuxtConfig({
  plugins: ['~/plugins/firebase.js'],
  modules: ['@pinia/nuxt','@nuxt/icon',],
  devtools: { enabled: true },
  css: ['./assets/main.css','@fortawesome/fontawesome-free/css/all.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    preset: 'node',
  },
  compatibilityDate: '2024-08-19',
  
});

