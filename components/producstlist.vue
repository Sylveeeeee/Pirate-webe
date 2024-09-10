<!-- src/components/ProductList.vue -->
<template>
  <div>
    <h1>Product List</h1>
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <img :src="product.image"/>
        <div class="card-content">
          <h3>{{ product.name }}</h3>
          <p>{{ product.detail }}</p>
          <a href="" class="btn-buy">BUY NOW</a></div>

      </li>
    </ul>
    <p v-else>No products available</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const products = ref([]);

    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products'); // URL ของ API ของคุณ
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(fetchProducts);

    return {
      products
    };
  }
};
</script>

<style scoped>
/* เพิ่มสไตล์ตามต้องการ */
</style>
