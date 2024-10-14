import { createRouter } from 'h3';
import { getUserById } from '../controllers/userController';
import authenticateJWT from '../middleware/authMiddleware';

const router = createRouter();

router.get('/user', authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.id; // สมมุติว่า userId ถูกจัดเก็บใน JWT
    const user = await getUserById(userId); // เรียกฟังก์ชันเพื่อดึงข้อมูลผู้ใช้

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user); // ส่งข้อมูลผู้ใช้กลับ
  } catch (error) {
    console.error('Error fetching user data:', error); // ล็อกข้อผิดพลาด
    res.status(500).json({ message: 'Internal Server Error' }); // ส่งข้อความผิดพลาดกลับ
  }
});

export default router;
