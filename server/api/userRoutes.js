const express = require('express');
const router = express.Router();
const db = require('../db'); // นำเข้าโมดูล db.js เพื่อเชื่อมต่อกับฐานข้อมูล
const { verifyToken } = require('./middleware'); // ฟังก์ชันสำหรับยืนยัน token

// GET /api/user
router.get('/', verifyToken, (req, res) => {
  const userId = req.user.id; // กำหนด userId จาก token
  db.query('SELECT name, email FROM users WHERE id = ?', [userId], (error, results) => {
    if (error) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) {
      return res.json(results[0]); // ส่งข้อมูลผู้ใช้กลับ
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  });
});

module.exports = router;
