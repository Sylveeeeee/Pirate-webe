import express from 'express';
import { loginUser } from '../controllers/authController.js'; // นำเข้าฟังก์ชันการล็อกอิน

const router = express.Router();

// กำหนดเส้นทางสำหรับการล็อกอิน
router.post('/login', loginUser);

// ส่งออก router แบบ default
export default router; // ตรวจสอบว่าไม่มีการส่งออกฟังก์ชันอื่น ๆ ที่อาจจะทำให้เกิดข้อผิดพลาดนี้
