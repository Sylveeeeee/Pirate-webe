import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../pages/index.vue' // หรือหน้าอื่นที่ต้องการนำผู้ใช้ไปหลังจาก login

const routes = [
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
