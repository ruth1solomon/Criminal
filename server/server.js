const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const connect = require('./utilities/dbconnection');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 6000;

// Connect to the database
connect();

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL, // Allow requests from client-side
    credentials: true, // Allow sessions to persist across different requests from the same user
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    secure: false // Require HTTPS (optional, but recommended)
}));

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes)

// Example route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
