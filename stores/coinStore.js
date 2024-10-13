import { defineStore } from 'pinia';

export const useCoinStore = defineStore('coin', {
  state: () => ({
    coin_balance: 0, // สามารถตั้งค่าเริ่มต้นเป็น 0 หรือค่าเริ่มต้นอื่น
  }),

  getters: {
    // Getter สำหรับดึงข้อมูลยอดเหรียญ
    getCoinBalance: (state) => state.coin_balance,
  },

  actions: {
    async topUpCoins(amount) {
      try {
        // ตรวจสอบว่า token มีอยู่หรือไม่
        const token = localStorage.getItem('token');
        if (!token) {console.error('No token found');
          return;}
  
        // เรียก API สำหรับการเติมเหรียญ
        const response = await fetch('/api/topup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ตรวจสอบว่า token ถูกส่ง
          },
          body: JSON.stringify({ amount }), // ส่งยอดที่ต้องการเติม
        });
  
        // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to top up coins');
        }
  
        // รับข้อมูลที่ตอบกลับจาก API เช่น ยอดเหรียญใหม่
        const data = await response.json();
        if (data && data.updatedBalance !== undefined) {
          this.coin_balance = data.updatedBalance; // อัปเดตยอดเหรียญใน store
          alert('Top up successful! New balance: ' + this.coin_balance);
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        // จัดการกับข้อผิดพลาด
        console.error('Error topping up coins:', error);
        alert(error.message || 'Something went wrong during top up');
      }
    },

    async fetchCoinBalance() {
      try {
        const token = localStorage.getItem('token'); // รับ token จาก localStorage
        const response = await fetch('/api/topup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // ส่ง token
          },
          body: JSON.stringify({ amount }), // ส่งข้อมูล amount
        });

        if (!response.ok) {
          throw new Error('Failed to fetch coin balance');
        }

        const data = await response.json();
        this.coin_balance = data.coin_balance; // อัปเดตยอดเหรียญจากการดึงข้อมูลผู้ใช้
      } catch (error) {
        console.error('Error fetching coin balance:', error);
      }
    },
  },
});
