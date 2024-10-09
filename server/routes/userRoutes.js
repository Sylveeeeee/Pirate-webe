// server/routes/userRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken'); // ใช้สำหรับตรวจสอบ token
const router = express.Router();

// Middleware ตรวจสอบ JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // หากไม่มี token

  // ตรวจสอบ token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // token ไม่ถูกต้อง
    req.user = user; // ส่งข้อมูล user ที่ได้จาก token ไปยังฟังก์ชันถัดไป
    next();
  });
};

// Endpoint สำหรับดึงข้อมูลผู้ใช้
router.get('/user', authenticateToken, (req, res) => {
  // ข้อมูลผู้ใช้ที่ต้องการส่งกลับไป
  const userData = {
    name: "John Doe", // ข้อมูลจากฐานข้อมูลจริง
    email: req.user.email, // ดึง email จาก token ที่ยืนยันแล้ว
    phone: "123-456-7890", // สามารถดึงจากฐานข้อมูลได้
  };

  res.json(userData); // ส่งข้อมูลผู้ใช้กลับไปยัง frontend
});

module.exports = router;
