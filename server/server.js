const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createConnection } = require('./db');

const app = express();
app.use(express.json());

let connection;

// ฟังก์ชันสำหรับสร้าง token
const generateToken = (userId) => {
  // เปลี่ยน 'your_jwt_secret' เป็น secret ของคุณ
  return jwt.sign({ id: userId }, '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1', { expiresIn: '1h' });
};

// เชื่อมต่อกับฐานข้อมูล
const initDB = async () => {
  connection = await createConnection();
};

// เรียกใช้ฟังก์ชัน initDB เพื่อเชื่อมต่อฐานข้อมูล
initDB().catch(err => {
  console.error('Database connection failed:', err);
});

// ตั้งค่า API สำหรับการล็อกอิน
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user.id);

    // ตรวจสอบให้แน่ใจว่า API ส่งข้อมูลผู้ใช้กลับมา
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการในที่นี้ เช่น name, phone
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
