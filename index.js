import express from 'express';
import cors from 'cors';
import loginApi from './server/api/login.js'; // Import login routes
import topupRoutes from './server/api/topup.js'; // Import topup routes

const app = express();
const PORT = process.env.PORT || 3000;

// Use middleware
app.use(cors());
app.use(express.json()); // For handling JSON request body

// Use login routes
app.use('/api/login', loginApi);

// Use topup routes
app.use('/api/topup', topupRoutes); // Set topup routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
