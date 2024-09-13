<template>
    <div v-if="isVisible" class="dialog-overlay">
      <div class="text-center bg-[#ffff] rounded-[8px] px-[90px] py-[30px]">
        <p class="text-[#00ff00] text-[30px] mb-[20px]">สำเร็จ</p>
        <p class="mb-[20px] font-[300] ">เพิ่มสินค้าไปยังรถเข็นแล้ว</p>
        <button @click="continueShopping" class="py-2 px-20 rounded bg-[#00000051] text-[20px]">ปิด</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from '#app';
  
  const props = defineProps(['isVisible']);
  const emit = defineEmits(['close']);
  
  const router = useRouter();
  
  const goToCart = () => {
    router.push('/cart');
  };
  
  const continueShopping = () => {
    emit('close');
  };
  </script>
  
  <style>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  </style>
  