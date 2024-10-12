// stores/coins.js
import { defineStore } from 'pinia';


export const useCoinsStore = defineStore('coins', {
  state: () => ({
    userCoins: [],
    userId: null, // เพิ่ม state สำหรับ userId
  }),

  actions: {
    setUserId(id) {
      this.userId = id; // ตั้งค่า userId
    },

    async fetchUserCoins() {
      if (!this.userId) {
        throw new Error('User ID is not set.');
      }
      try {
        const response = await $fetch(`/api/coins/user-coins/${this.userId}`);
        this.userCoins = response; // หรือจัดการข้อมูลที่ได้รับตามที่ต้องการ
      } catch (error) {
        console.error('Error fetching user coins:', error);
      }
    },
  },
});
