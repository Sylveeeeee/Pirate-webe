<template>
  <div>
    <navbar />
    <navbar2 />
    <div class="CA">
      <div class="cartTB">
        <a id="CTT">CART</a>
        <div class="TBP_F">
          <div class="TBP">
            <div class="TL">CATALOG</div>
            <div class="PPP flex items-center">
              <a class="text-[#ffff] text-[30px] w-[380px] h-[40px] flex items-center bg-[#ff505000]">สินค้า</a>
              <a class="text-[#ffff] text-[30px] w-[200px] h-[40px] flex items-center justify-center bg-[#ffabab00]">ราคา</a>
              <a class="text-[#ffff] text-[30px] w-[200px] h-[40px] flex items-center justify-center bg-[#ff505000]">จำนวน</a>
            </div>

            <!-- Display cart items -->
            <div v-for="item in cartItems" :key="item.id" class="flex border-b-[1px]">
              <div class="flex w-[390px] bg-[#ff505000]">
                <div class="w-[150px] h-[160px] ml-[40px] my-[30px] rounded-[4px] overflow-hidden items-center flex content-center bg-[#ffff]">
                  <img :src="item.imageC" />
                </div>
                <div class="flex flex-col pl-[30px] py-[25px] w-[173px]">
                  <div class="text-[#ffff] text-[20px]">{{ item.name }}</div>
                  <div class="text-[16px] text-wrap w-[150px]  text-[#ffffff81] my-[10px] h-[130px] overflow-hidden p-[px] bg-[#00000000]">{{ item.detail }}</div>
                </div>
              </div>
              <div class="items-center justify-center text-[#ffff] text-[30px] w-[200px] flex bg-[#ffabab00]">฿ {{ item.price }}</div>
              <div class="items-center content-center text-[#ffff] text-[30px] w-[200px] bg-[#ff505000]">
                <div class="w-[180px] h-[100px] flex items-center justify-center">
                  <button @click="decreaseQuantity(item.id)" class="text-[30px] shadow-md bg-[#ffffff10] px-[10px] rounded-[3px] w-[35px] h-[40px] mr-[10px] flex items-center justify-center">-</button>
                  <button class="text-[25px] border-2 bg-[#ffffff00] px-[20px] rounded-[3px] mr-[10px] w-[35px] h-[40px] justify-center flex">{{ item.quantity }}</button>
                  <button @click="increaseQuantity(item.id)" class="text-[30px] shadow-md bg-[#ffffff10] px-[10px] rounded-[3px] w-[35px] h-[40px] flex items-center justify-center">+</button>
                </div>
              </div>
            </div>

            <!-- No items in cart -->
            <div v-if="cartItems.length === 0" class="PPP">
              <a class="text-[#ffff] flex items-center justify-center bg-[#ffa9a900] text-[40px]">ไม่มีสินค้าในตะกร้า</a>
            </div>
          </div>

          <!-- Payment section -->
          <div class="PAY">
            <div class="CRP">เลือกช่องทางชำระเงิน</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '~/stores/cartStore';
import { useRouter } from '#app'; // Use correct import for router

const cartStore = useCartStore();
const router = useRouter();

// Access cartItems from the store
const cartItems = computed(() => cartStore.cartItems);

const increaseQuantity = (id) => {
  const item = cartItems.value.find(item => item.id === id);
  if (item) {
    cartStore.addToCart(item); // Increase quantity
  }
};

const decreaseQuantity = (id) => {
  cartStore.removeFromCart(id); // Remove item from cart
};
</script>

<style>
/* CSS สไตล์ */
.CRP {
    color: aqua;
    font-size: 30px;
}
.PAY {
    width: 40%;
    background: #444444;
    padding: 20px;
    border-radius: 10px;
}
.PPP {
    margin-top: 20px;
    border-bottom: #b1b1b1 solid 1px;
    padding-inline: 40px;
    padding-bottom: 10px;
}
.TL {
    padding-inline: 40px;
    color: aqua;
    font-size: 35px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    justify-content: center;
    display: flex;
}
.TBP {
    width: 60%;
    flex-direction: column;
    display: flex;
    margin-right: 20px;
}
.cartTB {
    display: flex;
    align-items: center;
    background: #1d1d1d;
    flex-direction: column;
}
#CTT {
    font-size: 40px;
    background: linear-gradient(to right, aqua , white );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 50px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

}
.TBP_F {
    width: 70%;
    margin-top: 50px;
    display: flex;
}
body {
    background: #1d1d1d;
}
</style>
