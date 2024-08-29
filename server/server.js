/* eslint-disable no-undef */
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
// server.js
const authRoutes = require('./routes/authRoutes');
const connect = require('./utilities/dbconnection');


const PORT = process.env.PORT || 5000;
connect();
app.use(cors({
    origin: process.env.CLIENT_URL, // allow requests from client-side
    credentials: true, // allow sessions to persist across different requests from the same user
    //optionSuccessStatus: 200, // allow 200 status responses for OPTIONS requests
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // allow specific HTTP methods
    //allowedHeaders: ['Content-Type', 'Authorization'] // allow specific headers
    secure: false // require HTTPS (optional, but recommended)
    // maxAge: 3600000 // 1 hour (optional, but recommende
}));
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/auth/register', authRoutes);
app.use('/api/auth/login', authRoutes);

// Example route
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});