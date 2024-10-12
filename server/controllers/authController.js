// controllers/authController.js
import bcrypt from 'bcrypt'; // สำหรับการเข้ารหัสรหัสผ่าน
import jwt from 'jsonwebtoken'; // สำหรับการสร้าง JWT
import { getUserByEmail } from '../models/user.js'; // ฟังก์ชันที่จะใช้ดึงข้อมูลผู้ใช้จากฐานข้อมูล

// ฟังก์ชันจัดการการล็อกอิน
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // ตรวจสอบว่ามีข้อมูลที่จำเป็นหรือไม่
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  try {
    // ดึงข้อมูลผู้ใช้จากฐานข้อมูลตามอีเมล
    const user = await getUserByEmail(email);

    // ตรวจสอบว่าผู้ใช้มีอยู่หรือไม่
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // ตรวจสอบรหัสผ่านที่ได้รับกับรหัสผ่านที่เข้ารหัสในฐานข้อมูล
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // สร้าง JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1', // เปลี่ยนเป็น secret key ที่ปลอดภัย
      { expiresIn: '1h' } // กำหนดเวลาหมดอายุของ token
    );

    // ส่งข้อมูลการตอบกลับพร้อม token และข้อมูลผู้ใช้
    res.json({
      message: 'Login successful',
      token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        coin_balance: user.coin_balance,
      },
    });
  } catch (error) {
    console.error('Login error:', error); // เพิ่มการแสดงข้อผิดพลาดในคอนโซล
    res.status(500).json({ message: 'Internal server error.', error: error.message }); // ส่งข้อมูลข้อผิดพลาดกลับไป
  }
};
