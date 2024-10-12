<template>
  <div>
    <span class="text-[#ffff] ml-[10px]">coin : {{ authStore.user.coin_balance }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const totalCoins = ref(0);

const fetchUserCoins = async () => {
  const userId = localStorage.getItem('userId'); // รับ userId จาก localStorage

  if (!userId) {
    console.error('User ID not found. Please log in again.');
    return;
  }

  const response = await fetch(`/api/coins/user-coins/${userId}`);

  if (response.ok) {
    const data = await response.json();
    totalCoins.value = data.totalCoins;
  } else {
    console.error('เกิดข้อผิดพลาดในการดึงข้อมูลเหรียญ');
  }
};



// เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์ถูก mount
onMounted(fetchUserCoins);
</script>

<style scoped>
/* คุณสามารถเพิ่มสไตล์ได้ที่นี่ */
</style>
