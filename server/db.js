// server/db.js
const { createConnection } = require('mysql2/promise');

async function initDB() {
    try {
        const connection = await createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        console.log('Database connected successfully');
        return connection;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw error; // ทำการส่งข้อผิดพลาดเพื่อให้จัดการได้อย่างถูกต้อง
    }
}

module.exports = { initDB }; // ส่งออกฟังก์ชัน
