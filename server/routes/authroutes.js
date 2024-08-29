// routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Authentication logic here
  res.json({ message: 'Login successful' });
});

module.exports = router;
