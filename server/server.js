const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const coinsRoutes = require('./routes/coins'); // เชื่อมต่อ coins routes
const userRoutes = require('./routes/userRoutes'); // นำเข้า userRoutes
const coinsRoutes = require('./routes/coins'); // เชื่อมต่อ coins routes
const paymentRoutes = require('./routes/paymentRoutes'); // Import paymentRoutes


const app = express(); // ประกาศ app ที่นี่

// ใช้ cors
app.use(cors());

// ใช้ body-parser เพื่อให้สามารถอ่าน body ของ request ได้
app.use(bodyParser.json());
app.use(express.json()); // ใช้เพื่อจัดการกับ request body

// กำหนดให้ใช้ routes ของเหรียญ
app.use('/api/coins', coinsRoutes); 

// ใช้เส้นทางการล็อกอิน
app.use('/api', authRoutes);
app.use('/api', userRoutes); // เชื่อมต่อเส้นทางผู้ใช้
app.use('/api/payment', paymentRoutes); // ใช้ paymentRoutes
// ใช้เส้นทางสำหรับ API users
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
