import bcrypt from 'bcrypt'; // นำเข้า bcrypt
import jwt from 'jsonwebtoken'; // นำเข้า jsonwebtoken
import { getUserByEmail } from '../models/user.js'; // นำเข้าโมเดลผู้ใช้

export const loginUser = async (email, password) => {
  console.log('Login attempt with:', { email }); // ล็อกเฉพาะอีเมลเพื่อรักษาความปลอดภัย

  if (!email || !password) {
    throw new Error('Email and password are required.');
  }

  try {
    const user = await getUserByEmail(email);

    // ตรวจสอบว่าผู้ใช้มีอยู่หรือไม่
    if (!user || !user.password) {
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    // สร้าง JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, // ใช้ JWT_SECRET จาก environment variables
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        coin_balance: user.coin_balance,
      },
    };
  } catch (error) {
    console.error('Login error:', error); // ล็อกข้อผิดพลาด
    throw new Error('Internal server error.'); // จัดการข้อผิดพลาดให้เหมาะสม
  }
};
