<template>
  <div>
    <navbar />
    <navbar2 />
    <title>{{ product?.name || 'Product Details' }}</title>
    <div v-if="Object.keys(product).length" class="flex justify-center">
      <div class="w-[1200px] flex bg-[#ffffff10]">
        <div class="DT w-[800px] flex bg-[#f3474700] ">
          <div class="tbimg1 w-[750px] h-[auto] overflow-hidden rounded-[10px]">
            <img v-if="product.image" :src="product.image" />
          </div>
          <div class="tbimg2 w-[750px] mt-[20px] flex">
            <div class="w-[375px] h-[210px] overflow-hidden mr-[20px] rounded-[10px]">
              <img v-if="product.image" :src="product.image2" />
            </div>
            <div class="w-[375px] h-[210px] overflow-hidden rounded-[10px]">
              <img v-if="product.image" :src="product.image3" />
            </div>
          </div>
          <div class="w-[98.4%] mt-[20px]">
            <div class="DTPD flex border-b-2 border-[#ffffff81] text-[#ffff] pb-2 text-[20px]">
              รายละเอียดสินค้า
            </div>
            <div class="bg-transparent px-2 text-[#ffffff98] py-3">
              {{ product.detail || 'รายละเอียดยังไม่มี' }}
            </div>
          </div>
        </div>
        <div class="DT w-[400px] bg-[#ffb1b100]">
          <div class="flex w-[100%] flex-col justify-center ">
            <div class="h-[495px]">
              <img v-if="product.image" class="w-[1000px] mb-4 rounded-[10px]" :src="product.image" />
              <div class="bg-transparent px-2 border-b-2 border-[#ffffff81] text-[#ffffff98] pb-2">
                {{ product.detail || 'รายละเอียดยังไม่มี' }}
              </div>
            </div>
            <div class="TBpay mt-[10px] flex flex-col items-center bg-[#ffa3a300] ">
              <a class="text-[30px] text-[#ffffff]">
                {{ product.name || 'ชื่อสินค้า' }}
              </a>
              <a class="text-[25px] text-[#ffffff]">
                {{ product.price || 'ราคา' }}
              </a>
              <button @click="addToCart" class=" border-2 border-[#00ffff] p-[10px] mt-[10px] px-20 rounded-[5px] text-[#ffffff] hover:text-[#000000] hover:bg-[#00ffff] ">เพิ่มลงตะกร้า</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex content-center text-[#ffffff98]">
      <p>Loading product details...</p>
    </div>

    <!-- Confirmation Dialog -->
    <ConfirmationDialog :isVisible="showDialog" @close="handleDialogClose" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from '#app';
import axios from 'axios';
import { useCartStore } from '~/stores/cartStore';
import ConfirmationDialog from '~/components/ConfirmationDialog.vue';

const product = ref({});
const route = useRoute();
const router = useRouter();
const apiUrl = import.meta.env.VITE_API;
const cartStore = useCartStore();
const showDialog = ref(false);

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
    cartStore.addToCart(product.value); // Add product to cart
    showDialog.value = true; // Show confirmation dialog
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

const handleDialogClose = (navigateToCart) => {
  showDialog.value = false;
  if (navigateToCart) {
    router.push('/cart'); // Redirect to cart if user chooses to go there
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
  