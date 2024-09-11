import { defineEventHandler, createError } from 'h3';

export default defineEventHandler(async (event) => {
  // เข้าถึง params ของ URL โดยใช้ event.node
  const id = event.context.params?.id as string;
  
  // ข้อมูลสินค้า
  const products = [
    { id: 1, name: 'Naraka', price: 100, image: '/nrk.jpg', image2: '/nrk.jpg', image3: '/nrk.jpg',detail: 'Full Red-Star Skin' },
    { id: 2, name: 'Digimon', price: 200, image: '/dg.jpg', detail: 'Full Red-Star Skin' },
    { id: 3, name: 'Wukong', price: 300, image: '/wk.jpg', detail: 'Full Red-Star Skin' },
    { id: 4, name: 'APEX', price: 300, image: '/apx.jpg', detail: 'Full Red-Star Skin' },
    { id: 5, name: 'Green hell', price: 300, image: '/gh.jpg', detail: 'Full Red-Star Skin' },
    { id: 6, name: 'Rainbow 6', price: 300, image: '/r6.jpg', detail: 'Full Red-Star Skin' },
    { id: 7, name: 'Grand Chase', price: 300, image: '/gc.jpg', detail: 'Full Red-Star Skin' },
    { id: 8, name: 'Gundam 4', price: 300, image: '/g4.jpg', detail: 'Full Red-Star Skin' },
    { id: 9, name: 'DragonBall Z', price: 300, image: '/dz.jpg', detail: 'Full Red-Star Skin' },
    { id: 10, name: 'Ark Survival', price: 300, image: '/ark.jpg', detail: 'Full Red-Star Skin' },
  ];

  // ค้นหาสินค้าตาม ID
  const product = products.find(p => p.id === parseInt(id));

  // หากไม่พบสินค้าให้แสดงข้อผิดพลาด
  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' });
  }

  return product;
});
