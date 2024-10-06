// server/api/login.js
import { pool } from '../db';  // ดึงข้อมูลการเชื่อมต่อจาก db.js ที่เราได้สร้างไว้ก่อนหน้า
import bcrypt from 'bcryptjs'; // สำหรับเข้ารหัสรหัสผ่าน (ในกรณีที่ใช้ bcrypt)
import jwt from 'jsonwebtoken'; // สำหรับสร้าง JSON Web Token

export default defineEventHandler(async (event) => {
  const body = await readBody(event);  // รับข้อมูลจาก request body
  const { email, password } = body;

  // ตรวจสอบว่าข้อมูลถูกส่งมาครบหรือไม่
  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  try {
    // ตรวจสอบว่ามีผู้ใช้อยู่ในระบบหรือไม่
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      return { error: 'User not found.' };
    }

    const user = users[0];

    // ตรวจสอบรหัสผ่าน (หากใช้ bcrypt ในการเข้ารหัสรหัสผ่าน)
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { error: 'Incorrect password.' };
    }

    // สร้าง JWT Token สำหรับผู้ใช้
    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token จะหมดอายุใน 1 ชั่วโมง
    });

    return { message: 'Login successful', token };  // ส่ง Token กลับไป
  } catch (error) {
    return { error: error.message };
  }
});
