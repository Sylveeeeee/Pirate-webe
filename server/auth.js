// server/auth.js (backend)
const express = require('express');
const { initDB } = require('./db'); // ปรับเส้นทางหากจำเป็น
const router = express.Router();
const bcrypt = require('bcrypt'); // Assuming you use bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Assuming you use JWT for token generation

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const connection = await initDB(); // Initialize database connection

  try {
    const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
    console.log(rows);
    if (rows.length > 0) {
      const user = rows[0];
      
      // Compare password
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Assuming you have logic to generate a token
        const token = jwt.sign({ id: user.id }, '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1', { expiresIn: '1h' }); // Replace with your secret key
        res.json({ token, user });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) connection.end(); // Close the connection
  }
});

module.exports = router;
