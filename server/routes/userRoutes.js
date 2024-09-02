const express = require('express');
const { getUserDetails, updateUserProfile, updateUserSettings } = require('../controller/userController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to get user details
router.get('/profile', protect, getUserDetails);

// Route to update user profile
router.put('/profile', protect, updateUserProfile);

// Route to update user settings
router.put('/settings', protect, updateUserSettings);

module.exports = router;
