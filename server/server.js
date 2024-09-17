// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 5000; // กำหนดพอร์ตที่ต้องการ

// Middleware
app.use(cors());
app.use(express.json()); // เพื่อให้รองรับการแปลงข้อมูลเป็น JSON

// สร้างการเชื่อมต่อกับฐานข้อมูล
(async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('Connected to database successfully');
    await connection.end();
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();

// API สำหรับการลงทะเบียน
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // ตรวจสอบว่า email มีอยู่ในระบบแล้วหรือไม่
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    // เข้ารหัสรหัสผ่านก่อนเก็บลงฐานข้อมูล
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกข้อมูลผู้ใช้ใหม่ในฐานข้อมูล
    await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
