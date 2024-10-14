// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // ตรวจสอบว่ามี authorization header หรือไม่
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or invalid' });
  }

  const token = authHeader.split(' ')[1]; // แยกเอา token จาก 'Bearer <token>'

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification failed:', err.message);
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    req.user = user; // เก็บข้อมูลผู้ใช้ที่ถอดรหัสใน request object
    next(); // เรียกใช้ next เพื่อไปยัง middleware ถัดไป
  });
};
