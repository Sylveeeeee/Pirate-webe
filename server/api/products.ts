// ~/server/api/products.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  const products = [
    { id: 1, name: 'Naraka', price: 100 },
    { id: 2, name: 'Digimon', price: 200 },
    { id: 3, name: 'Wukong', price: 300 },
    { id: 4, name: 'APEX', price: 300 },
    { id: 5, name: 'Green hell', price: 300 },
    { id: 6, name: 'Rainbow 6', price: 300 },
    { id: 7, name: 'Grand Chase', price: 300 },
    { id: 8, name: 'Gundam 4', price: 300 },
    { id: 9, name: 'DragonBall Z', price: 300 },
    { id: 10, name: 'Ark Survival', price: 300 },
  ];

  return products;
});
