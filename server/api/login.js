import { loginUser } from '../controllers/authController.js'; // นำเข้าฟังก์ชัน loginUser
import express from 'express';

const router = express.Router();

// เส้นทางสำหรับการเข้าสู่ระบบ
router.post('/', async (req, res) => {
    const body = req.body; // อ่านข้อมูลจากคำขอ
    try {
        const response = await loginUser(body); // เรียกใช้ฟังก์ชัน loginUser
        return res.status(200).json(response); // ส่งผลลัพธ์กลับไป
    } catch (error) {
        console.error('Error in login API:', error.message);
        return res.status(400).json({ message: error.message }); // ข้อความแสดงข้อผิดพลาด
    }
});

export default router; // ส่งออก router
