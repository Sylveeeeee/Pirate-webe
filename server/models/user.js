import db from '../db.js'; // นำเข้าการเชื่อมต่อฐานข้อมูล

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้จากตาราง users, user_profile และ user_coins ตามอีเมล
export const getUserByEmail = async (email) => {
    const userQuery = `
      SELECT u.id, u.email, u.password, up.name, up.phone, uc.coin_balance
      FROM users u
      LEFT JOIN user_profile up ON u.id = up.user_id
      LEFT JOIN user_coins uc ON u.id = uc.user_id
      WHERE u.email = ?
    `;
    const [rows] = await db.query(userQuery, [email]);
    return rows[0]; // ส่งคืนข้อมูลผู้ใช้คนแรก
};

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้ตาม ID
export const getUserById = async (id) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null; // ส่งคืนข้อมูลผู้ใช้หรือ null ถ้าไม่พบ
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error; // แจ้งข้อผิดพลาด
  }
};

// ฟังก์ชันเพื่ออัปเดตยอดเหรียญของผู้ใช้
export const updateUserCoinBalance = async (id, newBalance) => {
  try {
    await db.query('UPDATE users SET coin = ? WHERE id = ?', [newBalance, id]);
  } catch (error) {
    console.error('Error updating user coin balance:', error);
    throw error; // แจ้งข้อผิดพลาด
  }
};
