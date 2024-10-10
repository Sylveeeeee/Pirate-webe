// routes/coins.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // เปลี่ยนเป็นโมดูลการเชื่อมต่อฐานข้อมูลของคุณ
import jwt from 'jsonwebtoken';

// POST /api/coins/add-coins
router.post('/add-coins', async (req, res) => {
  const { coins } = req.body;

  // ตรวจสอบ Token จาก Header
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  try {
    // ตรวจสอบและดึงข้อมูลผู้ใช้จาก Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId; // ดึง userId จาก Token

    // ตรวจสอบข้อมูลที่ส่งมา
    if (!coins) {
      return res.status(400).json({ success: false, message: 'กรุณาระบุจำนวนเหรียญ' });
    }

    // ตัวอย่างการอัปเดตจำนวนเหรียญในฐานข้อมูล
    const result = await db.query('UPDATE users SET coins = coins + ? WHERE id = ?', [coins, userId]);

    // ตรวจสอบว่ามีการอัปเดตข้อมูลหรือไม่
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'ไม่พบผู้ใช้' });
    }

    return res.json({ success: true, message: 'เติมเหรียญเรียบร้อยแล้ว' });
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเติมเหรียญ:', error);
    return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการเติมเหรียญ กรุณาลองใหม่อีกครั้ง' });
  }
});

module.exports = router;
