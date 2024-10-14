import { getUserById as getUserByIdFromDB } from '../models/user'; // สมมุติว่าดึงจาก model

export const getUserById = async (userId) => {
  try {
    const user = await getUserByIdFromDB(userId); // เรียกจาก model
    return user; // ส่งกลับข้อมูลผู้ใช้
  } catch (error) {
    console.error('Error getting user by ID:', error); // ล็อกข้อผิดพลาด
    throw error; // ส่งต่อข้อผิดพลาด
  }
};
