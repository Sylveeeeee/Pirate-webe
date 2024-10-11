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
              class="bg-[#fff0] h-[40px] border-[#ffff] rounded-md-l text-[20px] pl-[10px] border-r-0 pr-[10px]"
              v-model="amount"
              type="number"
              placeholder="จำนวนเหรียญ"
              min="1" 
            />
            <button
              @click="addCoins"
              class="bg-[#00ffff] h-[40px] border-[#ffff] rounded-r text-[20px] px-[10px] hover:bg-[#00ffffb4]"
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

// กำหนดตัวแปรสำหรับจำนวนเหรียญที่ผู้ใช้จะเติม
const amount = ref(0);
const successMessage = ref(''); // ตัวแปรสำหรับเก็บข้อความเมื่อเติมเหรียญสำเร็จ
const errorMessage = ref(''); // ตัวแปรสำหรับเก็บข้อความเมื่อเกิดข้อผิดพลาด

// ฟังก์ชันสำหรับเติมเหรียญ
const addCoins = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('User not logged in');
    return;
  }

  const response = await fetch('/api/coins/add-coins', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,  // Pass the token here
    },
    body: JSON.stringify({ coins: amount.value }),  // No need for userId as it's inferred from token
  });

  if (response.ok) {
    console.log('เพิ่มเหรียญสำเร็จ');
    alert('เติมเหรียญเรียบร้อยแล้ว!');
    amount.value = 0;
  } else {
    console.error('เกิดข้อผิดพลาดในการเพิ่มเหรียญ');
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
background: #1d1d1d;;
}

</style>
