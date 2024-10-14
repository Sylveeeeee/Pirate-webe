// server/api/login.js
import express from 'express';
import { loginUser } from '../controllers/authController.js'; // นำเข้าฟังก์ชัน loginUser จาก controller

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    // อ่านข้อมูล request body จากคำขอ
    const { email, password } = req.body; // ดึง email และ password จาก request body

    // ตรวจสอบว่า email และ password ถูกส่งมาในคำขอหรือไม่
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    // เรียกใช้ฟังก์ชัน loginUser จาก controller
    const result = await loginUser(email, password);

    // ถ้าล็อกอินสำเร็จ ส่งข้อมูลกลับไปยังฝั่ง frontend
    return res.status(200).json({ success: true, ...result });

  } catch (error) {
    // ถ้าล็อกอินล้มเหลว ส่งข้อผิดพลาดกลับไปพร้อมสถานะที่เหมาะสม
    res.status(401).json({ success: false, message: error.message });
  }
});

export default router;
