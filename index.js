import express from 'express';
import cors from 'cors';
import authRoutes from './server/api/authRoutes.js'; // นำเข้าเส้นทาง auth

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ใช้ router ของ auth
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
