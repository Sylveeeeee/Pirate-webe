// server/api/topup.js
import express from 'express';
import jwt from 'jsonwebtoken'; // เปลี่ยนจาก require เป็น import
import { getUserById, updateUserCoinBalance } from '../models/user.js'; // เปลี่ยนจาก require เป็น import

const router = express.Router();

const JWT_SECRET = '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1';

router.post('/topup', async (req, res) => {
  const { amount } = req.body;
  const token = req.headers.authorization?.split(' ')[1]; // ดึง JWT token จาก headers

  if (!token) {
    return res.status(401).json({ error: 'Token is missing' });
  }

  try {
    // ตรวจสอบความถูกต้องของ JWT token
    const decoded = jwt.verify(token, JWT_SECRET);

    // ดึงข้อมูลผู้ใช้จากฐานข้อมูล
    const user = await getUserById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // อัปเดตยอดเหรียญ
    const newBalance = user.coin_balance + amount;
    await updateUserCoinBalance(user.id, newBalance);

    // ส่งยอดเหรียญใหม่กลับไปให้ client
    res.json({ newBalance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; // ใช้ export default แทน module.exports
