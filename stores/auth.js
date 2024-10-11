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
          body: { email, password },
        });
    
        console.log('API Response:', response); // เพิ่มการ log เพื่อตรวจสอบการตอบกลับ
    
        if (response.error) {
          this.error = response.error;
          this.message = null;
          return false;
        }
    
        this.token = response.token;
    
        // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน response หรือไม่
        if (response.user) {
          this.user = response.user; // อัปเดตข้อมูลผู้ใช้
          localStorage.setItem('token', response.token);
          localStorage.setItem('userId', response.user.id); // ตรวจสอบที่นี่
          this.message = 'Login successful...';
          this.error = null;
        } else {
          this.error = 'User data not found in response.'; // เปลี่ยนข้อความข้อผิดพลาด
          this.message = null;
          return false; // คืนค่า false ถ้าไม่มีข้อมูลผู้ใช้
        }
    
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
