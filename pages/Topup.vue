<template>
  <div>
    <navbar />
    <navbar2 />
    <div class="flex justify-center mt-[20px]">
      <navcol />
      <div class="max-w-2xl w-[800px] flex flex-col border-[#ffffff] px-[50px] rounded-md pt-[20px] border">
        <div>
          <div class="text-[40px] text-[#00ffff] mb-[20px] font-bold">เติมเงิน</div>
          <div class="flex">
            <input
              class="bg-[#fff0] h-[40px] border-[#ffff] rounded-l-md text-[20px] pl-[10px] border-r-0 pr-[10px]"
              v-model="amount"
              type="number"
              placeholder="จำนวนเหรียญ"
              min="1" 
            />
            <button
              @click="addCoins"
              class="bg-[#00ffff] h-[40px] border-[#ffff] rounded-r-md text-[20px] px-[10px] hover:bg-[#00ffffb4]"
            >
              เติมเหรียญ
            </button>
          </div>
          <div v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</div>
          <div v-if="successMessage" class="text-green-500 mt-2">{{ successMessage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth'; // นำเข้า authStore จาก Pinia

// ตัวแปรสำหรับจำนวนเหรียญที่จะเติม
const amount = ref(0);

// ข้อความแสดงความสำเร็จและข้อผิดพลาด
const successMessage = ref('');
const errorMessage = ref('');

// เรียกใช้ authStore
const authStore = useAuthStore();

// ฟังก์ชันสำหรับการเติมเหรียญ
const addCoins = async () => {
  successMessage.value = ''; // ล้างข้อความเมื่อเริ่มต้น
  errorMessage.value = '';

  // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่
  if (!authStore.token) {
    errorMessage.value = 'กรุณาเข้าสู่ระบบก่อนทำการเติมเหรียญ';
    return;
  }

  // เรียกฟังก์ชัน topUpCoins จาก authStore
  const success = await authStore.topUpCoins(amount.value);

  if (success) {
    successMessage.value = 'เติมเหรียญสำเร็จ!'; // แสดงข้อความเมื่อเติมเหรียญสำเร็จ
    amount.value = 0; // รีเซ็ตจำนวนเหรียญหลังเติมสำเร็จ
  } else {
    errorMessage.value = authStore.error || 'เกิดข้อผิดพลาดในการเติมเหรียญ'; // แสดงข้อผิดพลาด
  }
};
</script>

<style>
/* สไตล์เพิ่มเติมถ้าจำเป็น */
.text-red-500 {
  color: red;
}

.text-green-500 {
  color: green;
}

body {
  background: #1d1d1d;
}
</style>
