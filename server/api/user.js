const express = require('express');
const router = express.Router();
const { getUserById, updateUserField } = require('../controllers/userController');
const { authenticateJWT } = require('../middleware/authMiddleware'); // Middleware for JWT authentication

// GET user data
router.get('/', authenticateJWT, async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you store user ID in the JWT
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PATCH user data (update specific fields)
router.patch('/:field', authenticateJWT, async (req, res) => {
  const { field } = req.params;
  const { value } = req.body;

  try {
    const updatedUser = await updateUserField(req.user.id, field, value);
    res.json(updatedUser);
  } catch (error) {
    console.error(`Error updating ${field}:`, error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
