/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-undef
const jwt = require('jsonwebtoken');
const User = require('../models/usermodels'); // Adjust path as needed

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Store in environment variable

// Handle user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { loginUser };

