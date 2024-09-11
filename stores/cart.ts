import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<{ id: number, name: string, price: number, image: string }>,
  }),
  actions: {
    addToCart(product: { id: number, name: string, price: number, image: string }) {
      const existingProduct = this.cart.find(p => p.id === product.id);
      if (!existingProduct) {
        this.cart.push(product);
      } else {
        // หากมีสินค้าอยู่แล้ว สามารถเพิ่ม logic เพื่อจัดการจำนวนสินค้าได้
        console.log('สินค้านี้มีอยู่ในตะกร้าแล้ว');
      }
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter(product => product.id !== productId);
    },
  },
  getters: {
    cartTotal(): number {
      return this.cart.reduce((total, product) => total + product.price, 0);
    },
    cartItems(): number {
      return this.cart.length;
    },
  },
});
