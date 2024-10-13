import bcrypt from 'bcrypt'; // อย่าลืมนำเข้า bcrypt
import jwt from 'jsonwebtoken'; // อย่าลืมนำเข้า jsonwebtoken
import { getUserByEmail } from '../models/user.js'; // นำเข้าโมเดลผู้ใช้ที่เหมาะสม
import dotenv from 'dotenv'; // นำเข้า dotenv

dotenv.config(); // เริ่มต้น dotenv เพื่อใช้ environment variables

export const loginUser = async (email, password) => {
  // ตรวจสอบว่ามีข้อมูลที่จำเป็นหรือไม่
  if (!email || !password) {
    console.log('Email and password are required.');
    throw new Error('Email and password are required.');
  }

  try {
    const user = await getUserByEmail(email);

    // ตรวจสอบว่าผู้ใช้มีอยู่หรือไม่
    if (!user) {
      console.log('Invalid email or password.'); // ควรทำ log แต่ไม่บอกว่าผู้ใช้มีอยู่หรือไม่
      throw new Error('Invalid email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid email or password.'); // ควรทำ log แต่ไม่บอกว่าผู้ใช้มีอยู่หรือไม่
      throw new Error('Invalid email or password.');
    }

    // สร้าง JWT โดยใช้ secret key จาก environment variable
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, // ใช้ environment variable สำหรับ secret key
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token: token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        coin_balance: user.coin_balance,
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Internal server error.'); // โยนข้อผิดพลาดที่เหมาะสม
  }
};
