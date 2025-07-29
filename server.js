const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const rideRoutes = require('./routes/rideRoutes');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rides', rideRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
