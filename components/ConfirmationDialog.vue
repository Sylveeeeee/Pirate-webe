<template>
    <div v-if="isVisible" class="dialog-overlay" @click="continueShopping">
      <div class="dialog-content">
        <p>เพิ่มสินค้าลงตะกร้าสำเร็จ</p>
        <button @click="goToCart">Go to Cart</button>
        <button @click="continueShopping">Continue Shopping</button>
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
  .dialog-content {
    background: #1d1d1d;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
  </style>
  