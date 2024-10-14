// stores/cartStore.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addProduct(productId) {
      this.cartItems.push(productId);
      console.log('Product added to cart:', productId);
    },
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    
    removeFromCart(productId) {
      const itemIndex = this.cartItems.findIndex(item => item.id === productId);
      if (itemIndex !== -1) {
        // ลดจำนวนสินค้าลง 1
        this.cartItems[itemIndex].quantity -= 1;

        // ลบสินค้าออกจากตะกร้าเมื่อจำนวนสินค้าเป็น 0
        if (this.cartItems[itemIndex].quantity <= 0) {
          this.cartItems.splice(itemIndex, 1);
        }
      }
    },
    
    clearCart() {
      this.cartItems = [];
    }
  }
});
