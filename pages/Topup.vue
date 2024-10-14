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
import { useCoinStore } from '../stores/coinStore'; // นำเข้า coinStore จาก Pinia
import { loginApi } from '../api/auth';

// ตัวแปรสำหรับจำนวนเหรียญที่จะเติม
const amount = ref(0);

// ข้อความแสดงความสำเร็จและข้อผิดพลาด
const successMessage = ref('');
const errorMessage = ref('');

// เรียกใช้ coinStore และ authStore
const coinStore = useCoinStore();

// ฟังก์ชันสำหรับการเติมเหรียญ
const addCoins = async () => {
  successMessage.value = ''; // ล้างข้อความ
  errorMessage.value = '';

  // ตรวจสอบให้แน่ใจว่าผู้ใช้เข้าสู่ระบบ
  if (!coinStore.validateToken()) {
    errorMessage.value = 'กรุณาเข้าสู่ระบบก่อนเติมเหรียญ';
    return;
  }

  // ทำการเติมเหรียญ
  try {
    const success = await coinStore.topUpCoins(amount.value);
    if (success) {
      successMessage.value = 'เติมเหรียญสำเร็จ!';
      amount.value = 0; // รีเซ็ตจำนวน
    } else {
      errorMessage.value = coinStore.error || 'เกิดข้อผิดพลาดในการเติมเหรียญ';
    }
  } catch (err) {
    errorMessage.value = 'มีข้อผิดพลาดในการเติมเหรียญ: ' + err.message;
  }
};

</script>

<style>
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
