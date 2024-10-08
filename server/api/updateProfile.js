import { pool } from '../db';  // เชื่อมต่อกับฐานข้อมูล
import bcrypt from 'bcryptjs'; // ใช้สำหรับเข้ารหัสรหัสผ่าน

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, newPassword } = body;

  if (!username) {
    return { error: 'Username is required' };
  }

  try {
    // ดึงข้อมูลผู้ใช้ที่เข้าสู่ระบบปัจจุบัน (คุณต้องตั้งค่าการยืนยันตัวตนไว้ก่อนหน้านี้)
    const userId = event.context.userId;

    // อัปเดตชื่อผู้ใช้
    await pool.query('UPDATE users SET username = ? WHERE id = ?', [username, userId]);

    // ถ้าผู้ใช้ส่งรหัสผ่านใหม่ ให้เข้ารหัสและอัปเดตรหัสผ่าน
    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await pool.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userId]);
    }

    return { message: 'Profile updated successfully' };
  } catch (error) {
    return { error: error.message };
  }
});
