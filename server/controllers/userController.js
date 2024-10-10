// server/controllers/userController.js

const db = require('../database'); // นำเข้าการเชื่อมต่อฐานข้อมูล

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้
const getUserData = async (req, res) => {
  try {
    const userId = req.user.id; // รับ userId จาก request หลังจากการยืนยันตัวตน
    const user = await db.query('SELECT name, email, phone FROM users WHERE id = ?', [userId]); // ดึงข้อมูลผู้ใช้จากฐานข้อมูล

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user[0]); // ส่งข้อมูลผู้ใช้กลับ
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserData };
