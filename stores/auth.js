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
      // ตรวจสอบว่าอยู่ในเบราว์เซอร์หรือไม่
      if (typeof window !== 'undefined') {
        this.token = localStorage.getItem('token') || null;
        this.user.id = localStorage.getItem('userId') || null;
      }
    },

    async login(email, password) {
      try {
        const response = await loginApi(email, password);
        console.log(response);

        if (!response || !response.user) {
          this.setError('User data not found in response.');
          return false;
        }

        // อัปเดตข้อมูลผู้ใช้
        this.user = {
          id: response.user.id,
          name: response.user.name,
          email: response.user.email,
          coin_balance: response.user.coin_balance,
        };
        this.token = response.token;

        // ตรวจสอบว่าอยู่ในเบราว์เซอร์ก่อนที่จะเข้าถึง localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id);
        }

        this.message = 'Login successful!';
        this.clearError();
        return true;
      } catch (err) {
        this.setError(err.message || 'An error occurred during login');
        return false;
      }
    },

    async topUpCoins(amount) {
      if (!this.token) {
        this.setError('User not authenticated. Please log in.');
        return false;
      }

      try {
        const response = await $fetch('/api/topup', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
          body: { amount },
        });

        if (response.error) {
          this.setError(response.error);
          return false;
        }

        this.user.coin_balance = response.newBalance;
        this.message = 'Top-up successful!';
        this.clearError();
        return true;
      } catch (err) {
        this.setError('An error occurred during top-up');
        return false;
      }
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
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.message = 'Logged out successfully.';
    },
  },
});
