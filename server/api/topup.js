// server/api/topup.js
import { topUpCoins } from '../controllers/topupController';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // ใช้ readBody เพื่ออ่านข้อมูลจาก body
  const user = event.context.auth; // ต้องใช้ middleware เพื่อตั้งค่า auth context
  
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }

  await topUpCoins({ body, user }, event); // ส่งข้อมูล body และ user ไปยัง controller
});
