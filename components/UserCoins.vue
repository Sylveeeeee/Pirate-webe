<template>
  <div>
    <!-- แสดงจำนวนเหรียญจาก authStore โดยตรง -->
    <span class="text-[#ffff] ml-[10px]">Coin : {{ authStore.user.coin_balance }}</span>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'; // นำเข้า authStore

const authStore = useAuthStore(); // เรียกใช้ authStore

// ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่ และเรียกข้อมูลผู้ใช้เมื่อคอมโพเนนต์ถูก mount
authStore.initialize();
</script>

<style scoped>
/* สไตล์เพิ่มเติม */
</style>
