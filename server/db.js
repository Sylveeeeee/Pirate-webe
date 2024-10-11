// db.js
const mysql = require('mysql2/promise');
require('dotenv').config(); // โหลดตัวแปร environment จาก .env

const initDB = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'piratedatabase',
    });

    return connection;
};

module.exports = { initDB };
