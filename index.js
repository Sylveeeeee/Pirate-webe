import express from 'express';
import cors from 'cors';
import authRoutes from './server/api/login.js'; // ตรวจสอบว่าตำแหน่งนี้ถูกต้อง

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ตรวจสอบว่าเส้นทางถูกต้อง

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
