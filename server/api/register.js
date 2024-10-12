import db from '../db.js'; // ดึงข้อมูลการเชื่อมต่อจาก db.js
import bcrypt from 'bcryptjs'; // สำหรับเข้ารหัสรหัสผ่าน

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Email and password are required.' }));
  }

  try {
    const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUsers.length > 0) {
      return sendError(event, createError({ statusCode: 409, statusMessage: 'Email already registered.' }));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    return { statusCode: 201, body: { message: 'User registered successfully', userId: result.insertId } };
  } catch (error) {
    console.error('Registration error:', error);
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Internal server error.' }));
  }
});
