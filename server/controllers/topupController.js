// controllers/topupController.js
import db from '../db.js'; // นำเข้าการเชื่อมต่อฐานข้อมูล

export const updateUserCoinBalance = async (userId, amount) => {
    try {
        // อัปเดตยอด coins ของผู้ใช้ในฐานข้อมูล
        const [result] = await db.execute(
            'UPDATE users SET coin_balance = coin_balance + ? WHERE id = ?',
            [amount, userId]
        );
        return result.affectedRows > 0; // คืนค่า true หากอัปเดตสำเร็จ
    } catch (error) {
        console.error('Error updating user coin balance:', error);
        throw new Error('Could not update user coin balance');
    }
};

export const getUserCoins = async (userId) => {
    try {
        // ดึงยอด coins ของผู้ใช้จากฐานข้อมูล
        const [rows] = await db.execute(
            'SELECT coin_balance FROM users WHERE id = ?',
            [userId]
        );
        return rows[0]?.coin_balance || 0; // คืนค่าหมายเลขยอด coins หากไม่มีให้คืน 0
    } catch (error) {
        console.error('Error retrieving user coins:', error);
        throw new Error('Could not retrieve user coins');
    }
};

export const addUserCoins = async (userId, amount) => {
    try {
        // เพิ่มยอด coins ของผู้ใช้ในฐานข้อมูล
        await db.execute(
            'INSERT INTO user_coins (user_id, amount) VALUES (?, ?)',
            [userId, amount]
        );
    } catch (error) {
        console.error('Error adding user coins:', error);
        throw new Error('Could not add user coins');
    }
};
