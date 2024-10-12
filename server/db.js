// server/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// โหลดค่าจากไฟล์ .env
dotenv.config();

// สร้างการเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'piratedatabase',
});

// ฟังก์ชันทดสอบการเชื่อมต่อฐานข้อมูล (optional)
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connection successful!');

    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
};

// เรียกใช้งานฟังก์ชันทดสอบการเชื่อมต่อเมื่อไฟล์นี้ถูกรัน
testConnection();

// ส่งออกการเชื่อมต่อฐานข้อมูล
export default pool;
