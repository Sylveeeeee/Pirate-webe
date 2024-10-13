import express from 'express';
import { topUpCoins } from '../controllers/topupController.js'; // Import top-up controller

const router = express.Router();

// POST route for topping up coins
router.post('/', topUpCoins); 

export default router;
