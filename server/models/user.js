// server/models/user.js
import db from '../db.js'; // นำเข้า db.js

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้ตาม ID
export const getUserById = async (userId) => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
  return rows[0]; // คืนค่าผู้ใช้คนแรก
};

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้ตามอีเมล
export const getUserByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows; // คืนค่าแถวผู้ใช้ที่ค้นพบ
};

// ฟังก์ชันเพื่อสร้างผู้ใช้ใหม่
export const createUser = async (userData) => {
  const { email, password, name, phone } = userData;
  const result = await db.query('INSERT INTO users (email, password, name, phone) VALUES (?, ?, ?, ?)', 
                                 [email, password, name, phone]);
  return result[0]; // คืนค่าผลลัพธ์การสร้างผู้ใช้
};

// ฟังก์ชันเพื่ออัปเดตข้อมูลผู้ใช้
export const updateUser = async (userId, updates) => {
  const { name, email, phone } = updates;
  await db.query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', 
                 [name, email, phone, userId]);
};

// ฟังก์ชันเพื่อเปลี่ยนรหัสผ่าน
export const changePassword = async (userId, newPassword) => {
  await db.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, userId]);
};
