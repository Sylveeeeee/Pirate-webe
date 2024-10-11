// server/api/login.js
const { initDB } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const connection = await initDB();

  try {
    const [users] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = users[0];

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      message: 'Login successful',
      token: token,
      user: { 
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone || ''
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    connection.end();
  }
};

module.exports = { handler };
