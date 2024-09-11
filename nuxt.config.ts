export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['./assets/main.css'],
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
