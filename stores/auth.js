// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
      email: '',
      id: null,
      coin_balance: 0, // เพิ่มยอดเหรียญใน state
    },
    token: null,
    error: null,
    message: null,
  }),

  actions: {
    async login(email, password) {
      try {
        const response = await $fetch('/api/login', {
          method: 'POST',
          body: {
            email,
            password,
          },
        });
        console.log('API Response:', response);
    
        if (response.error) {
          this.error = response.error;
          this.message = null;
          return false;
        }
    
        this.token = response.token;
    
        // หากไม่ส่งข้อมูล user กลับมา ก็ไม่ต้องอัปเดต this.user
        localStorage.setItem('token', response.token);
        this.message = 'Login successful...';
        this.error = null;
    
        return true;
      } catch (err) {
        console.error('Error details:', err);
        this.error = 'An error occurred during login';
        this.message = null;
        return false;
      }
    },

    // เพิ่มฟังก์ชันเติมเหรียญ
    async topUpCoins(amount) { // ลบ userId ออก
      try {
        const response = await $fetch('/api/topup', {
          method: 'POST',
          body: {
            amount,
          },
        });

        if (response.error) {
          this.error = response.error;
          return false;
        }

        // อัปเดตยอดเหรียญใน state
        this.user.coin_balance = response.newBalance; // อัปเดตยอดเหรียญ
        this.message = 'Top-up successful!';
        return true;
      } catch (err) {
        console.error('Error during coin top-up:', err);
        this.error = 'An error occurred during top-up';
        return false;
      }
    },
  },
});
