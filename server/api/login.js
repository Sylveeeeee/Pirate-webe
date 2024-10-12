import express from 'express';
import { loginUser } from './authController.js'; // นำเข้า controller

const router = express.Router();

router.post('/', loginUser); // กำหนดเส้นทาง POST สำหรับ /api/auth

export default router;
