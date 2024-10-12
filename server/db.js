// server/db.js
import mysql from 'mysql2/promise';

// สร้างการเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'piratedatabase',
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
