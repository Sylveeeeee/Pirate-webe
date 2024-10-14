// server/api/topup.js
import express from 'express';
import { topUpCoins } from '../controllers/topupController.js';

const router = express.Router();

// เส้นทางสำหรับการเติมเหรียญ
router.post('/topup', async (req, res) => {
  try {
    const user = req.user; // ต้องแน่ใจว่ามี middleware ที่จัดการ token และตั้งค่า req.user
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const body = req.body; // ใช้ req.body เพื่ออ่านข้อมูลจาก body
    const result = await topUpCoins({ body, user });

    res.json(result); // ส่งผลลัพธ์กลับไปยัง client
  } catch (error) {
    console.error('Error in top-up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
