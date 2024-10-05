const express = require('express');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

// สร้างการเชื่อมต่อกับฐานข้อมูล
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// เส้นทางสำหรับการลงทะเบียนผู้ใช้
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // ตรวจสอบว่ามีผู้ใช้ที่ลงทะเบียนแล้วหรือไม่
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกผู้ใช้ใหม่ลงฐานข้อมูล
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
  