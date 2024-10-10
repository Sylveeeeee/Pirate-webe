// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // เชื่อมต่อกับฐานข้อมูล
const { verifyToken } = require('../middleware/auth'); // Middleware สำหรับตรวจสอบ Token

// API สำหรับดึงข้อมูลผู้ใช้
router.get('/user', verifyToken, (req, res) => {
  const userId = req.userId; // หรือตรวจสอบ userId จาก Token

  db.query('SELECT name, email FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (results.length > 0) {
      return res.json(results[0]); // ส่งข้อมูลผู้ใช้กลับ
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  });
});

module.exports = router;
