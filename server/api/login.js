import { createConnection } from '../db'; // ใช้การเชื่อมต่อฐานข้อมูลที่สร้างไว้
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export default defineEventHandler(async (event) => {
  if (event.req.method !== 'POST') {
    throw createError({ statusCode: 405, message: 'Method Not Allowed' });
  }

  const body = await readBody(event); // อ่านข้อมูลจาก request body
  const { email, password } = body;

  if (!email || !password) {
    throw createError({ statusCode: 400, message: 'Email and password are required' });
  }

  let connection;
  try {
    connection = await createConnection(); // เชื่อมต่อกับฐานข้อมูล

    // ค้นหาผู้ใช้
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return {
          error: true,
          message: 'Invalid email or password',
          user: null
      };
  }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw createError({ statusCode: 401, message: 'Invalid email or password' });
    }

    // สร้าง token
    const token = jwt.sign({ id: user.id }, '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1', { expiresIn: '1h' });

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    throw createError({ statusCode: 500, message: 'Internal server error' });
  } finally {
    if (connection) {
      await connection.end(); // ปิดการเชื่อมต่อฐานข้อมูล
    }
  }
});
async function connectToDatabase() {
  try {
      const connection = await createConnection();
      console.log('Database connection successful');
      return connection;
  } catch (error) {
      console.error('Database connection failed:', error);
  }
}
connectToDatabase();

