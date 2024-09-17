// vite.config.js
export default {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',  // ชี้ไปยังเซิร์ฟเวอร์ Node.js ของคุณ
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
  