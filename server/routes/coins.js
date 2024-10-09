const express = require('express');
const router = express.Router();
const db = require('../config/db'); // เชื่อมต่อฐานข้อมูล

// เติมเหรียญ
router.post('/add-coins', async (req, res) => {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
        return res.status(400).json({ message: 'User ID and amount are required' });
    }

    try {
        await db.query('INSERT INTO coins (user_id, amount) VALUES (?, ?)', [userId, amount]);
        res.status(201).json({ message: 'Coins added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// ดึงข้อมูลเหรียญของผู้ใช้
router.get('/user-coins/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const [rows] = await db.query('SELECT SUM(amount) AS totalCoins FROM coins WHERE user_id = ?', [userId]);
        res.json({ totalCoins: rows[0].totalCoins || 0 });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
