import { updateUserCoinBalance } from '../models/userCoins.js'; // ฟังก์ชันเพื่ออัปเดตยอดเหรียญ

export const topUpCoins = async (req, res) => {
  const { amount } = req.body; // รับค่าจำนวนเหรียญจาก body
  const userId = req.user.id; // สมมติว่า user ID ถูกตั้งค่าใน request หลังจากการตรวจสอบ JWT

  // ตรวจสอบให้แน่ใจว่าจำนวนเหรียญเป็นจำนวนบวก
  if (!amount || typeof amount !== 'number' || amount <= 0) {
    return res.status(400).json({ message: 'Invalid amount. It must be a positive number.' });
  }

  try {
    // อัปเดตยอดเหรียญของผู้ใช้
    const newBalance = await updateUserCoinBalance(userId, amount);

    // ส่งยอดเหรียญใหม่กลับไป
    res.json({ success: true, newBalance });
  } catch (error) {
    console.error('Error updating coin balance:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};
