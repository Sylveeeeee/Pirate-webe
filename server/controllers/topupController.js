import { updateUserCoinBalance } from '../models/userCoins.js'; // Function to update coin balance

export const topUpCoins = async (req, res) => {
  const { amount } = req.body;
  const userId = req.user.id; // Assume the user ID is set in the request after JWT verification

  try {
    // Update user coin balance
    const newBalance = await updateUserCoinBalance(userId, amount);

    res.json({ newBalance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
};
