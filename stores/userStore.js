import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
  }),
  actions: {
    async fetchUserData() {
      if (process.client) { // ตรวจสอบว่ากำลังรันในฝั่งคลient
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:3000/api/topup', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        this.userData = await response.json();
      }
    },
  },
});
