import db from '../db.js'; // นำเข้าการเชื่อมต่อฐานข้อมูล

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้จากตาราง users, user_profile และ user_coins ตามอีเมล
export const getUserByEmail = async (email) => {
  try {
    // ตรวจสอบว่ามีการส่งอีเมลหรือไม่
    if (!email) {
      throw new Error('Email is required'); // ถ้าไม่ส่งอีเมล
    }

    const result = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (result.length === 0) {
      throw new Error('User not found'); // ถ้าไม่พบผู้ใช้
    }

    return result[0]; // คืนค่าผู้ใช้ที่ตรงตามอีเมล
  } catch (error) {
    console.error('Error fetching user:', error.message);
    throw new Error('Unable to fetch user by email: ' + error.message);
// โยนข้อผิดพลาด
  }
};


// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้ตาม ID
export const getUserById = async (id) => {
  try {
    if (!id) {
      throw new Error('User ID is required'); // ตรวจสอบว่ามีการส่ง ID หรือไม่
    }

    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    // ส่งคืนข้อมูลผู้ใช้หรือ null ถ้าไม่พบ
    return rows.length > 0 ? rows[0] : null; 
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
    throw new Error('Unable to fetch user by ID: ' + error.message); // แจ้งข้อผิดพลาด
  }
};

// ฟังก์ชันเพื่ออัปเดตยอดเหรียญของผู้ใช้
export const updateUserCoinBalance = async (id, newBalance) => {
  if (typeof newBalance !== 'number' || newBalance < 0) {
    throw new Error('Invalid coin balance'); // ตรวจสอบความถูกต้องของ newBalance
  }

  try {
    const [result] = await db.query('UPDATE user_coins SET coin_balance = ? WHERE user_id = ?', [newBalance, id]);

    // ตรวจสอบว่ามีการอัปเดตหรือไม่
    if (result.affectedRows === 0) {
      throw new Error('User not found for updating balance'); // แจ้งข้อผิดพลาดถ้าไม่พบผู้ใช้
    }
  } catch (error) {
    console.error('Error updating user coin balance:', error.message);
    throw new Error('Unable to update user coin balance: ' + error.message); // แจ้งข้อผิดพลาด
  }
};
