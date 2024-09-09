export default defineNuxtConfig({
  
  serverHandlers: [
    { route: '/api/products', handler: '~/server/api/products.ts' }
  ],
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
    // หากไม่ต้องการ devServer, ให้ลบออกหรือกำหนดเป็นอ็อบเจ็กต์ที่ว่าง
  },
  compatibilityDate: '2024-08-19',
  
});

