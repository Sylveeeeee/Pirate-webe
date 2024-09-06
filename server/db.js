// db.js
import mysql from 'mysql2/promise';

// สร้างการเชื่อมต่อฐานข้อมูล
const pool = mysql.createPool({
  host: process.env.DB_HOST, // ระบุ host
  user: process.env.DB_USER, // ระบุ user
  password: process.env.DB_PASSWORD, // ระบุ password
  database: process.env.DB_NAME // ระบุ database
});

 
export default pool;
