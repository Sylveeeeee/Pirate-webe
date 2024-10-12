import db from '../db.js'; // นำเข้าการเชื่อมต่อฐานข้อมูล

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้จากตาราง users, user_profile และ user_coins ตามอีเมล
export const getUserByEmail = async (email) => {
  try {
    const userQuery = `
      SELECT u.id, u.email, u.password, up.name, up.phone, uc.coin_balance
      FROM users u
      LEFT JOIN user_profile up ON u.id = up.user_id
      LEFT JOIN user_coins uc ON u.id = uc.user_id
      WHERE u.email = ?;
    `;
    const [rows] = await db.query(userQuery, [email]);
    return rows[0] || null; // ส่งคืนข้อมูลผู้ใช้คนแรกหรือ null ถ้าไม่พบ
  } catch (error) {
    console.error('Error fetching user by email:', error.message);
    throw new Error('Unable to fetch user by email'); // แจ้งข้อผิดพลาด
  }
};

// ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้ตาม ID
export const getUserById = async (id) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length > 0 ? rows[0] : null; // ส่งคืนข้อมูลผู้ใช้หรือ null ถ้าไม่พบ
  } catch (error) {
    console.error('Error fetching user by ID:', error.message);
    throw new Error('Unable to fetch user by ID'); // แจ้งข้อผิดพลาด
  }
};

// ฟังก์ชันเพื่ออัปเดตยอดเหรียญของผู้ใช้
export const updateUserCoinBalance = async (id, newBalance) => {
  if (typeof newBalance !== 'number' || newBalance < 0) {
    throw new Error('Invalid coin balance'); // ตรวจสอบความถูกต้องของ newBalance
  }

  try {
    await db.query('UPDATE user_coins SET coin_balance = ? WHERE user_id = ?', [newBalance, id]);
  } catch (error) {
    console.error('Error updating user coin balance:', error.message);
    throw new Error('Unable to update user coin balance'); // แจ้งข้อผิดพลาด
  }
};
