import express from 'express';
import cors from 'cors';
import loginApi from './server/api/login.js'; // Import login routes
import topUpCoins from './server/api/topup.js'; 
import coinBalance from './server/api/coinBalance.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

// Use middleware
app.use(cors());
app.use(express.json()); // For handling JSON request body

app.use('/api', coinBalance); 
// Use login routes
app.use('/api/login', loginApi);
// Use topup routes
app.use('/api/topup', topUpCoins);// Set topup routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
