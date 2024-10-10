const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('./db'); // นำเข้าการเชื่อมต่อฐานข้อมูล
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Middleware for authenticating JWT tokens
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, 'YOUR_SECRET_KEY', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// API endpoint to get user data
app.get('/api/user', authenticateJWT, (req, res) => {
    const userId = req.user.id; // Assuming req.user.id is the user ID

    connection.query('SELECT name, email, phone FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            return res.sendStatus(500); // Internal server error
        }
        if (results.length === 0) return res.sendStatus(404); // User not found
        res.json(results[0]); // Return the user data
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
