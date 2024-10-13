import express from 'express';
import cors from 'cors';
import loginApi from './server/api/login.js'; // นำเข้าเส้นทาง auth
import topupRoutes from './server/api/topup.js'; // นำเข้าเส้นทาง topup

const app = express();
const PORT = process.env.PORT || 3000;

// ใช้ middleware
app.use(cors());
app.use(express.json()); // สำหรับจัดการกับ JSON request body

// ใช้ router ของ auth
app.use('/api/login', loginApi);

// ใช้ router ของ topup
app.use('/api/topup', topupRoutes); // ตั้งค่าเส้นทาง topup

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
