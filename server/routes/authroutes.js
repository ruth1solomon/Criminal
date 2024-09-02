
const express = require('express');
const router = express.Router();
const { registerUser, verifyOtp } = require('../controller/register'); // Adjust path as needed
const { loginUser } = require('../controller/login'); // Adjust path as needed

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Verify OTP
router.post('/verify-otp', verifyOtp);

module.exports = router;
