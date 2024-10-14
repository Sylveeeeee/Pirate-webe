import { defineStore } from 'pinia';
import { loginApi } from '../api/auth.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
      email: '',
      id: null,
      coin_balance: 0,
    },
    token: null,
    error: null,
    message: null,
  }),

  actions: {
    initialize() {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');
        const storedUserId = localStorage.getItem('userId');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUserId) {
          this.token = storedToken;  
          this.user = JSON.parse(storedUser);
        } else {
          this.logout(); // Logout if no token or user
        }
      }
    },

    async login(email, password) {
      try {
        const response = await loginApi(email, password);
    
        if (!response || !response.user) {
          this.setError('User data not found in response.');
          return false; // คืนค่า false หากไม่มีข้อมูลผู้ใช้
        }
    
        // อัปเดตข้อมูลผู้ใช้
        this.user = {
          id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          coin_balance: response.user.coin_balance,
        };
        this.token = response.token; // เก็บโทเค็นใน state
    
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
          localStorage.setItem('user', JSON.stringify(this.user));
        }
    
        this.message = 'Login successful!';
        this.clearError();
        return true; // คืนค่า true หากล็อกอินสำเร็จ
      } catch (err) {
        console.error('Login error:', err);
        this.setError(err.message || 'An error occurred during login');
        return false; // คืนค่า false หากเกิดข้อผิดพลาด
      }
    },

    setMessage(message) {
      this.message = message; // เก็บข้อความใน state
    },
    
    setError(errorMessage) {
      this.error = errorMessage;
    },

    clearError() {
      this.error = null;
    },

    logout() {
      this.user = { name: '', email: '', id: null, coin_balance: 0 };
      this.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('user');
      }
      this.message = 'Logged out successfully.';
    },
  },
});
