import { defineStore } from 'pinia';

// ฟังก์ชันเพื่อดึงโทเค็นจาก localStorage
const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null; // หากไม่ใช่เบราว์เซอร์ให้คืนค่า null
};

export const useCoinStore = defineStore('coin', {
  state: () => ({
    token: getTokenFromLocalStorage(), // ใช้ฟังก์ชันเพื่อดึงโทเค็น
    coin_balance: 0, // ค่าเริ่มต้นของยอดเหรียญ
  }),

  getters: {
    getCoinBalance: (state) => state.coin_balance,
  },

  actions: {
    validateToken() {
      return this.token !== null; // เช็คว่า token มีค่า
    },

    async topUpCoins(amount) {
      try {
        const token = getTokenFromLocalStorage(); // ดึงโทเค็นจาก localStorage
        console.log('Token:', token); // ล็อกโทเค็นเพื่อการดีบัก

        if (!token) {
          throw new Error('Token not found. Please log in again.');
        }

        const response = await fetch('http://localhost:3000/api/topup', { // เพิ่ม URL แบบเต็ม
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่งโทเค็นใน header
          },
          body: JSON.stringify({ amount }), // ส่งจำนวนเหรียญที่เติม
        });

        if (!response.ok) {
          const errorResponse = await response.json(); // รับข้อมูลข้อผิดพลาด
          throw new Error(errorResponse.message || 'Failed to top up coins');
        }

        const data = await response.json();
        this.coin_balance += amount; // อัปเดตยอดเหรียญใน store
        alert('เติมเหรียญสำเร็จ! ยอดใหม่: ' + this.coin_balance); // แจ้งเตือนเมื่อเติมเหรียญสำเร็จ
      } catch (error) {
        console.error('Error topping up coins:', error);
         // แจ้งเตือนข้อผิดพลาด
      }
    },

    async fetchCoinBalance() {
      try {
        const token = getTokenFromLocalStorage(); // ใช้ฟังก์ชันเพื่อดึงโทเค็น
        const response = await fetch('http://localhost:3000/api/login', { // ใช้ URL ที่ถูกต้อง
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่งโทเค็น
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch coin balance');
        }

        const data = await response.json();
        this.coin_balance = data.coin_balance; // อัปเดตยอดเหรียญจากการดึงข้อมูลผู้ใช้
      } catch (error) {
        console.error('Error fetching coin balance:', error); // แจ้งเตือนข้อผิดพลาด
      }
    },
  },
});
