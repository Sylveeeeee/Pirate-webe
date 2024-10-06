export default defineNuxtRouteMiddleware((to, from) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // ถ้าไม่มี token จะนำผู้ใช้ไปที่หน้า login
      return navigateTo('/login');
    }
  });
  