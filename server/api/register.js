const pool = require('../db/database');  // เปลี่ยนเส้นทางให้เหมาะสมกับโครงสร้างโปรเจ็กต์ของคุณ

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { registerUser };
