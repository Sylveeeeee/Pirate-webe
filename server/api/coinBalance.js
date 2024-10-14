// server/api/coinBalance.js
import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js'; // นำเข้า middleware สำหรับตรวจสอบ token
import db from '../db.js'; // นำเข้าโมเดลฐานข้อมูล

const router = express.Router();

// ดึงข้อมูลยอดเหรียญของผู้ใช้
router.get('/coin-balance', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // รับ userId จาก token
    const [rows] = await db.query('SELECT coin_balance FROM users WHERE id = ?', [userId]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const coinBalance = rows[0].coin_balance;
    res.json({ coin_balance: coinBalance });
  } catch (error) {
    console.error('Error fetching coin balance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router; // ส่งออก router เป็นค่า default
