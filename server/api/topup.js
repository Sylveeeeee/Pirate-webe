import { createConnection } from '../db';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { userId, amount } = body;

    // เชื่อมต่อกับฐานข้อมูล
    const connection = await createConnection();

    // ตรวจสอบผู้ใช้
    const [userRows] = await connection.execute('SELECT * FROM users WHERE id = ?', [userId]);
    if (userRows.length === 0) {
        throw createError({ statusCode: 404, message: 'User not found' });
    }

    // อัปเดตยอดเหรียญของผู้ใช้
    const newBalance = parseFloat(userRows[0].coin_balance) + parseFloat(amount);
    await connection.execute('UPDATE users SET coin_balance = ? WHERE id = ?', [newBalance, userId]);

    // บันทึกการทำธุรกรรม
    await connection.execute('INSERT INTO coin_transactions (user_id, amount) VALUES (?, ?)', [userId, amount]);

    return {
        message: 'Coin top-up successful',
        newBalance,
    };
});
