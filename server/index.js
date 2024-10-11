const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Sample login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // ตรวจสอบอีเมลและรหัสผ่านที่นี่ (Dummy logic)
    if (email === 'user@example.com' && password === 'your_password') {
        res.json({
            message: 'Login successful',
            token: 'your_token',
            user: {
                id: 1,
                email: email,
                name: 'User Name',
                phone: '1234567890'
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
