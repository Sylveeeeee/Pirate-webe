// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
      email: '',
      phone: ''
    },
    // ...other state properties
  }),

  actions: {
    setUser(data) {
        this.user = data; // อัปเดตข้อมูลผู้ใช้
      },
    async login(email, password) {
      try {
        const response = await $fetch('/api/login', {
          method: 'POST',
          body: {
            email: email,
            password: password,
          },
        });

        if (response.error) {
          this.error = response.error;
          this.message = null;
        } else {
          // ถ้า login สำเร็จ เก็บ token และ user ลงใน state
          this.token = response.token;
          this.user = response.user;  // เก็บข้อมูลผู้ใช้ เช่น ชื่อ, อีเมล
          localStorage.setItem('token', response.token);  // เก็บ token ใน localStorage

          this.message = 'Login successful!';
          this.error = null;
        }
      } catch (err) {
        this.error = 'An error occurred during login';
        this.message = null;
      }
    },

    async loginWithGoogle() {
      // โค้ดสำหรับ login ด้วย Google
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      this.message = 'Logged out successfully!';
    }
  },
});
