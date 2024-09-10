import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // นำเข้าตัว router

const app = createApp(App)
app.use(router)  // ใช้งาน router
app.mount('#app')
