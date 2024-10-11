// server/api/topup.js
import { createConnection } from '../db';

export default defineEventHandler(async (event) => {
  try {
    const token = event.node.req.headers['authorization'].split(' ')[1];
    const decoded = jwt.verify(token, '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1');
    const userId = decoded.id;
    
    const body = await readBody(event);
    const { amount } = body;

    const connection = await createConnection();
    
    // อัปเดตยอดเหรียญในฐานข้อมูล
    await connection.execute('UPDATE users SET coin_balance = coin_balance + ? WHERE id = ?', [amount, userId]);
    
    const [rows] = await connection.execute('SELECT coin_balance FROM users WHERE id = ?', [userId]);
    const newBalance = rows[0].coin_balance;

    return {
      message: 'Top-up successful',
      newBalance,
    };
  } catch (error) {
    console.error('Top-up error:', error);
    throw createError({ statusCode: 500, message: 'Internal Server Error' });
  }
});
