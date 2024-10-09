const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const coinsRoutes = require('./routes/coins'); // เชื่อมต่อ coins routes

app.use('/api/coins', coinsRoutes); // กำหนดให้ใช้ routes ของเหรียญ
app.use(express.json()); // ใช้เพื่อจัดการกับ request body

const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);
app.use(cors());
// ใช้ body-parser เพื่อให้สามารถอ่าน body ของ request ได้
app.use(bodyParser.json());

// ใช้เส้นทางการล็อกอิน
app.use('/api', authRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
const express = require('express');

 
app.use('/api', userRoutes); // ใช้เส้นทางสำหรับ API
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});