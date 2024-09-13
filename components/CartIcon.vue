<template>
    <div @click="navigateToCart" class="cart-icon-container hover:bg-[#ffffff1a] rounded-full h-[50px] w-[50px] flex justify-center items-center">
        <Icon class="text-[30px] " name="ph:shopping-cart"/>
      <span v-if="cartItemsCount > 0" class="cart-count ">{{ cartItemsCount }}</span>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCartStore } from '~/stores/cartStore';
  import { useRouter } from '#app';
  
  const cartStore = useCartStore();
  const router = useRouter();
  
  // Compute the total number of items in the cart
  const cartItemsCount = computed(() => {
    return cartStore.cartItems.reduce((total, item) => total + item.quantity, 0);
  });
  
  const navigateToCart = () => {
    router.push('/cart');
  };
  </script>
  
  <style scoped>
  .cart-icon-container {
    position: relative;
    cursor: pointer;
    font-size: 24px;
    color: #ffff;
    margin-right: 20px;
    
  }
  
  .cart-icon-container .cart-count {
    position: absolute;
    top: 3px;
    right: -1px;
    background-color: aqua;
    color: #000000;
    border-radius: 50%;
    padding: 1px 7px;
    font-size: 14px;
    font-weight: 500;
  }
  </style>
  