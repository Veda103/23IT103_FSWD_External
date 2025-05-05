// server/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load env variables
dotenv.config();

// Connect to db
const connectDB = require('./config/db');
connectDB();

// Route all files
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware connection
app.use(express.json());
app.use(cors());

// Set static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount all routers
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Simple route to test the program
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;