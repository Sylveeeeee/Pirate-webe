// server/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import { createError } from 'h3';

export default defineEventHandler(async (event) => {
  const authHeader = event.node.req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    try {
      const decoded = await new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      });

      event.node.req.user = decoded; // Store user info in the request
    } catch (err) {
      console.error('Token verification failed:', err.message);
      // Log the error but don't throw to allow access to the page
    }
  }
});
