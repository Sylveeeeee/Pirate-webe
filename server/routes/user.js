// server/routes/user.js
import express from 'express';
import { getUserById, createUser, updateUser, changePassword } from '../models/user.js';
import { authenticateToken } from '../middleware/authMiddleware.js'; // Middleware สำหรับตรวจสอบ token
const router = express.Router();

// ดึงข้อมูลผู้ใช้
router.get('/', authenticateToken, async (req, res) => {
  try {
    const user = await getUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// สร้างผู้ใช้
router.post('/', async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// อัปเดตผู้ใช้
router.put('/', authenticateToken, async (req, res) => {
  try {
    await updateUser(req.user.id, req.body);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// เปลี่ยนรหัสผ่าน
router.put('/password', authenticateToken, async (req, res) => {
  try {
    await changePassword(req.user.id, req.body.newPassword);
    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
