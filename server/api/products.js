// ~/server/api/products.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  const products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 }
  ];

  return products;
});
