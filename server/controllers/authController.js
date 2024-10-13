import bcrypt from 'bcrypt'; // อย่าลืมนำเข้า bcrypt
import jwt from 'jsonwebtoken'; // อย่าลืมนำเข้า jsonwebtoken
import { getUserByEmail } from '../models/user.js'; // นำเข้าโมเดลผู้ใช้ที่เหมาะสม

export const loginUser = async (email, password) => {
  // ตรวจสอบว่ามีข้อมูลที่จำเป็นหรือไม่
  if (!email || !password) {
    console.log('Email and password are required.'); // เพิ่มการแสดงผลที่นี่
    throw new Error('Email and password are required.'); // โยนข้อผิดพลาด
  }

  try {
    const user = await getUserByEmail(email);

    // ตรวจสอบว่าผู้ใช้มีอยู่หรือไม่
    if (!user) {
      console.log('Invalid email or password.'); // เพิ่มการแสดงผลที่นี่
      throw new Error('Invalid email or password.'); // โยนข้อผิดพลาด
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid email or password.'); // เพิ่มการแสดงผลที่นี่
      throw new Error('Invalid email or password.'); // โยนข้อผิดพลาด
    }

    // สร้าง JWT
    const token = jwt.sign({ id: user.id, email: user.email }, '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1', { expiresIn: '1h' });

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
