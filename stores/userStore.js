// userStore.js
import { defineStore } from 'pinia';

// ฟังก์ชันเพื่อดึงโทเค็นจาก localStorage
const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null; // หากไม่ใช่เบราว์เซอร์ให้คืนค่า null
};

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null, // ข้อมูลผู้ใช้
    token: getTokenFromLocalStorage() || null, // ใช้ฟังก์ชันเพื่อดึงโทเค็น
  }),

  getters: {
    isAuthenticated: (state) => state.token !== null, // เช็คว่าผู้ใช้ล็อกอินอยู่หรือไม่
  },

  actions: {
    async fetchUserData() {
      try {
        const token = this.token;
        if (!token) {
          throw new Error('Token not found. Please log in again.');
        }

        const response = await fetch('/api/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่งโทเค็นใน header
          },
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Failed to fetch user data');
        }

        this.userData = await response.json(); // รับข้อมูลผู้ใช้
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // ส่งต่อข้อผิดพลาด
      }
    },

    async updateUserField(field, value) {
      try {
        const token = this.token;
        if (!token) {
          throw new Error('Token not found. Please log in again.');
        }

        const response = await fetch('/api/user', {
          method: 'PUT', // ปรับเป็น PUT เพื่ออัปเดตข้อมูลผู้ใช้
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่งโทเค็นใน header
          },
          body: JSON.stringify({ field, value }), // ส่งฟิลด์และค่าที่ต้องการอัปเดต
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Failed to update user data');
        }

        // อัปเดต userData ใน store
        this.userData[field] = value; 
      } catch (error) {
        console.error('Error updating user field:', error);
        throw error; // ส่งต่อข้อผิดพลาด
      }
    },

    logout() {
      this.token = null; // ลบโทเค็น
      this.userData = null; // ลบข้อมูลผู้ใช้
      localStorage.removeItem('token'); // ลบโทเค็นจาก localStorage
    },
  },
});
