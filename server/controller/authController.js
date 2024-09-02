const User = require('../models/userModel'); // Adjust path to your user model

// Controller to get user details
const getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have user ID from middleware
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to update user profile
const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, email } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields
        user.name = name || user.name;
        user.email = email || user.email;

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to manage user settings
const updateUserSettings = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have user ID from middleware
        const { settings } = req.body; // Example settings

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update settings
        user.settings = { ...user.settings, ...settings };

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user settings:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getUserDetails,
    updateUserProfile,
    updateUserSettings,
};
