// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();

// เส้นทางสำหรับการชำระเงิน
router.post('/', (req, res) => {
  const { items, total } = req.body;

  // ประมวลผลการชำระเงิน (ในที่นี้คุณสามารถเพิ่มการเชื่อมต่อกับ Payment Gateway)
  // ตัวอย่างนี้จะเพียงแค่ส่งข้อความกลับ
  res.json({ message: 'การชำระเงินสำเร็จ!', items, total });
});

module.exports = router;
