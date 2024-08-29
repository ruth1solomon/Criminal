/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/register'); // Adjust path as needed
const { loginUser } = require('../controller/login'); // Adjust path as needed

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
