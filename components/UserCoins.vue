<template>
  <div>
    <!-- แสดงจำนวนเหรียญจาก coinStore -->
    <span class="text-[#ffff] ml-[10px]">Coin : {{ coinBalance }}</span>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'; // นำเข้า computed และ onMounted
import { useCoinStore } from '../stores/coinStore'; // นำเข้า coinStore

const coinStore = useCoinStore(); // เรียกใช้ coinStore

// คำนวณยอดเหรียญจาก coinStore
const coinBalance = computed(() => coinStore.getCoinBalance);

// ดึงข้อมูลยอดเหรียญเมื่อคอมโพเนนต์ถูก mount
onMounted(() => {
  coinStore.fetchCoinBalance();
});
</script>

<style scoped>
/* สไตล์เพิ่มเติม */
.text-red-500 {
  color: red;
}

.text-green-500 {
  color: green;
}
</style>
