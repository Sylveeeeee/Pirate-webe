<template>
    <div class=" ">
        <navbar />
        <navbar2 />
        <div class="flex justify-center mt-[20px]">
            <navcol/>
            <div class="max-w-2xl w-[800px] flex flex-col border-[#ffffff] px-[50px] rounded-md pt-[20px] border">
                <div class="">
                    <div class="text-[40px] text-[#00ffff] mb-[20px] font-bold">เติมเงิน</div>
                    <input class="bg-[#fff0] h-[40px] border-[#ffff] rounded-md-l text-[20px] pl-[10px] border-r-0 pr-[10px]" v-model="amount" type="number" placeholder="จำนวนเหรียญ" />
                    <button @click="addCoins" class="bg-[#00ffff] h-[40px] border-[#ffff] rounded-r text-[20px] px-[10px] hover:bg-[#00ffffb4]">เติมเหรียญ</button>
                </div>
            </div>
        </div>
    </div>  
</template>
<script setup>
import { ref } from 'vue';

const amount = ref(0);

const addCoins = async (userId, coins) => {
  const response = await fetch('/api/coins/add-coins', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, coins }),
  });

  if (response.ok) {
    console.log('เพิ่มเหรียญสำเร็จ');
  } else {
    console.error('เกิดข้อผิดพลาดในการเพิ่มเหรียญ');
  }
};

</script>