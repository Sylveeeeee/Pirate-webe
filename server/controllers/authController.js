import bcrypt from 'bcrypt'; // นำเข้า bcrypt
import jwt from 'jsonwebtoken'; // นำเข้า jsonwebtoken
import { getUserByEmail } from '../models/user.js'; // นำเข้าโมเดลผู้ใช้

export const loginUser = async (email, password) => {
  console.log('Login attempt with:', { email, password });

  if (!email || !password) {
    console.log('Email and password are required.');
    throw new Error('Email and password are required.');
  }

  try {
    const user = await getUserByEmail(email);
    console.log('User found:', user); // ล็อกข้อมูลผู้ใช้ที่ค้นพบ

    // ตรวจสอบว่าผู้ใช้มีอยู่หรือไม่
    if (!user || user.length === 0 || !user[0].password) { 
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!isPasswordValid) {
      console.log('Invalid email or password.');
      throw new Error('Invalid email or password.');
    }

    // สร้าง JWT
    const token = jwt.sign(
      { id: user[0].id, email: user[0].email },
      '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1',
      { expiresIn: '1h' }
    );

    return {
      message: 'Login successful',
      token: token,
      user: {
        id: user[0].id,
        email: user[0].email,
        name: user[0].name,
        coin_balance: user[0].coin_balance,
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Internal server error.');
  }
};

