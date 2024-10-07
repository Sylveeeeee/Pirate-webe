import { pool } from '../db';  // ดึงข้อมูลการเชื่อมต่อจาก db.js
import bcrypt from 'bcryptjs'; // สำหรับเข้ารหัสรหัสผ่าน

export default defineEventHandler(async (event) => {
  // ดึงข้อมูลที่ถูกส่งมาจากฟอร์ม
  const body = await readBody(event);
  
  const { email, password } = body;

  // ตรวจสอบว่าข้อมูลถูกส่งมาครบหรือไม่
  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  try {
    // ตรวจสอบว่ามีผู้ใช้อีเมลนี้อยู่ในระบบหรือไม่
    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return { error: 'Email already registered.' };
    }

    // เข้ารหัสรหัสผ่านก่อนบันทึกลงฐานข้อมูล
    const hashedPassword = await bcrypt.hash(password, 10); // 10 คือจำนวนรอบของ salt

    // บันทึกข้อมูลผู้ใช้ลงฐานข้อมูล
    const [result] = await pool.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, hashedPassword] // ใช้ hashedPassword แทน password
    );

    return { message: 'User registered successfully', userId: result.insertId };
  } catch (error) {
    return { error: error.message };
  }
});
