import express from 'express';
import { loginUser } from '../controllers/authController.js'; // นำเข้าฟังก์ชันการล็อกอิน

const router = express.Router();

// เส้นทางสำหรับการล็อกอิน
router.post('/login', loginUser);

export default router; // ส่งออก router แบบ default
