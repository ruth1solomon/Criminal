/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodels');

const generateOTP = require('../utilities/generateOTP');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Store in environment variable

// Handle user registration
const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password, confirmPassword, businessLicense } = req.body;
        const otp = generateOTP();
        console.log(otp);

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        user = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            confirmPassword,
            businessLicense


        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser };
