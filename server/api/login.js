// server/api/login.js
import { loginUser } from '../controllers/authController'; // นำเข้าฟังก์ชัน loginUser จาก controller
export default defineEventHandler(async (event) => {
    try {
      // อ่านข้อมูล request body จากคำขอ
      const body = await readBody(event);  
      const { email, password } = body;  // ดึง email และ password จาก request body // ตรวจสอบว่า email และ password ถูกส่งมาในคำขอหรือไม่
      if (!email || !password) {
        return { success: false, message: 'Email and password are required.' };
      }// เรียกใช้ฟังก์ชัน loginUser จาก controller
    const result = await loginUser(email, password);

    // ถ้าล็อกอินสำเร็จ ส่งข้อมูลกลับไปยังฝั่ง frontend
    return { success: true, ...result };

  } catch (error) {
    // ถ้าล็อกอินล้มเหลว ส่งข้อผิดพลาดกลับไปพร้อมสถานะที่เหมาะสม
    event.res.statusCode = 401;  // ตั้งค่า HTTP status เป็น 401 (Unauthorized)
    return { success: false, message: error.message };
  }
});