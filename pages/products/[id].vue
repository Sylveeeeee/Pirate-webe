<template>
  <div>
    <navbar />
    <navbar2 />
    <title>{{ product?.name || 'Product Details' }}</title>
    <div v-if="Object.keys(product).length" class="flex justify-center">
      <div class="TBDT">
        <div class="DT w-[70%] flex">
          <div class="tbimg1 w-[750px] h-[400px] overflow-hidden">
            <img v-if="product.image" :src="product.image" />
          </div>
          <div class="tbimg2 w-[750px] mt-[20px] flex">
            <div class="w-[375px] h-[210px] overflow-hidden mr-[20px]">
              <img v-if="product.image" :src="product.image" />
            </div>
            <div class="w-[375px] h-[210px] overflow-hidden">
              <img v-if="product.image" :src="product.image" />
            </div>
          </div>
          <div class="w-[98.4%] mt-[20px]">
            <div class="DTPD flex border-b-2 border-[#ffffff81] text-[#ffff]">
              รายละเอียดสินค้า
            </div>
            <div class="bg-transparent px-2 text-[#ffffff98]">
              {{ product.detail || 'รายละเอียดยังไม่มี' }}
            </div>
          </div>
        </div>
        <div class="DT w-[30%]">
          <div class="flex w-[100%] flex-col justify-center">
            <div class="">
              <img v-if="product.image" class="w-[1000px]" :src="product.image" />
              <div class="bg-transparent px-2 border-b-2 border-[#ffffff81] text-[#ffffff98]">
                {{ product.detail || 'รายละเอียดยังไม่มี' }}
              </div>
            </div>
            <div class="TBpay mt-[10px] flex flex-col items-center">
              <a class="text-[30px] text-[#ffffff98]">
                {{ product.name || 'ชื่อสินค้า' }}
              </a>
              <a class="text-[25px] text-[#ffffff98]">
                {{ product.price || 'ราคา' }}
              </a>
              <button @click="addToCart" class="border-2 p-[10px] mt-[10px] px-20 rounded-[5px] text-[#ffffff98]">เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex content-center text-[#ffffff98]">
      <p>Loading product details...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useCartStore } from '../stores/cartStore';

const product = ref({});
const route = useRoute();
const apiUrl = import.meta.env.VITE_API;

const cartStore = useCartStore();

const fetchProductDetail = async () => {
  try {
    console.log('Product ID:', route.params.id); // ตรวจสอบค่า id
    const response = await axios.get(`${apiUrl}/products/${route.params.id}`);
    product.value = response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

const addToCart = () => {
  try {
    cartStore.addProduct(product.value.id); // เพิ่มสินค้าในตะกร้า
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

onMounted(fetchProductDetail);
</script>


  
  <style>
  .DT {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .TBDT {
    width: 60%;
    display: flex;
  }
  body {
    background: #1d1d1d;
  }
  </style>
  