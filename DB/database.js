const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  // ใช้ชื่อผู้ใช้ที่ถูกต้อง
  password: '',  // ใช้รหัสผ่านที่ถูกต้อง
  database: 'piratedatabase',  // ใช้ชื่อฐานข้อมูลที่ถูกต้อง
});

module.exports = pool;  // ส่งออกเพื่อใช้ในไฟล์อื่น ๆ
