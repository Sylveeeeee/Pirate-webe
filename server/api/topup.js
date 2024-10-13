import { eventHandler, sendError, readBody } from 'h3'; 
import jwt from 'jsonwebtoken'; 
import { updateUserCoinBalance, getUserCoins, addUserCoins } from '../models/userCoins.js'; 

const secretKey = '70e0bcf3c68c04427049d27a82953f95cb9055a581495ad9c879091f996628b3e11cde1fc833d0810ab21ae2eebdd27f3518f2e2cd241b19f2fa55802d8b38b1'; 

export default eventHandler(async (event) => {
    const { amount } = await readBody(event); 
    const token = event.req.headers.authorization?.split(' ')[1]; 

    if (!token) {
        return sendError(event, { statusCode: 401, message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, secretKey); 
        const userId = decoded.id; 

        await updateUserCoinBalance(userId, amount); 
        await addUserCoins(userId, amount); 

        const totalCoins = await getUserCoins(userId); 
        return { message: 'Top-up successful!', newBalance: totalCoins }; 
    } catch (error) {
        console.error("Token verification error:", error); 
        return sendError(event, { statusCode: 401, message: 'Invalid token.' }); 
    }
});
