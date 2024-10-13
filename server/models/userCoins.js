// server/models/userCoins.js
import db from '../db.js'; // นำเข้าการเชื่อมต่อฐานข้อมูล

export const updateUserCoinBalance = async (userId, newBalance) => {
    const query = 'INSERT INTO user_coins (user_id, amount) VALUES (?, ?)';
    await db.query(query, [userId, amount]);
};

export const getUserCoins = async (userId) => {
    const query = 'SELECT SUM(amount) as total_coins FROM user_coins WHERE user_id = ?';
    const [rows] = await db.query(query, [userId]);
    return rows[0].total_coins || 0; // คืนค่าจำนวนเหรียญทั้งหมดหรือ 0
};

export const addUserCoins = async (userId, amount) => {
    try {
        const [result] = await pool.query(
            'UPDATE users SET coin_balance = coin_balance + ? WHERE id = ?',
            [amount, userId]
        );

        if (result.affectedRows === 0) {
            throw new Error('User not found or unable to update coins.');
        }

        // ดึงยอดเงินใหม่หลังจากการอัปเดต
        const [updatedUser] = await pool.query('SELECT coin_balance FROM users WHERE id = ?', [userId]);

        return updatedUser[0].coin_balance; // คืนค่ายอดเงินใหม่
    } catch (error) {
        console.error('Error updating user coins:', error);
        throw new Error('Database error while updating user coins.');
    }
};