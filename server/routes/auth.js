const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const router = express.Router();

// สร้างการเชื่อมต่อกับฐานข้อมูล
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'piratedatabase',
};

// ฟังก์ชันสำหรับล็อกอิน
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) {
      return res.status(400).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }

    // สร้าง token
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.json({
      message: 'ล็อกอินสำเร็จ',
      token,
      user: {
        id: user.id,
        email: user.email, // ส่ง email กลับไปด้วย
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการล็อกอิน' });
  }
});

module.exports = router;
