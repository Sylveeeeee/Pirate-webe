import pool from '../db'; // นำเข้า pool จากไฟล์ db.js

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  console.log('Received data:', { email, password });

  if (!email || !password) {
    return { statusCode: 400, body: { error: 'Email and password are required' } };
  }

  try {
    // Hash password (optional but recommended for security)
    // const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await pool.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password] // ใช้ hashedPassword แทน password หากทำการเข้ารหัส
    );

    return { message: 'User registered successfully', userId: result.insertId };
  } catch (error) {
    console.error('Error registering user:', error);
    return { statusCode: 500, body: { error: 'Error registering user' } };
  }
});