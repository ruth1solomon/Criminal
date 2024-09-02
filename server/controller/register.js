// controllers/registerController.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodels');
const sendEmail = require('../utilities/sendmail');
const upload = require('../utilities/upload');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware for handling file uploads
const uploadSingle = upload.single('businessLicense');

// Handle user registration
const registerUser = (req, res) => {
    uploadSingle(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'File upload error: ' + err });
        }

        try {
            const { firstName, lastName, username, email, password } = req.body;

            // Validate required fields
            if (!firstName || !lastName || !username || !email || !password) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Send OTP to user's email
            const emailResult = await sendEmail(email);
            if (!emailResult.success) {
                return res.status(500).json({ message: 'Error sending OTP email' });
            }

            const otp = emailResult.otp;
            const otpExpiry = Date.now() + 15 * 60 * 1000; // OTP valid for 15 minutes

            // Create a new user with OTP and OTP expiry
            user = new User({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
                businessLicense: req.file ? req.file.path : null, // Store file path if uploaded
                otp,
                otpExpiry,
            });

            await user.save();

            res.status(200).json({ message: 'OTP sent to email' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    });
};

// Handle OTP verification
const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if OTP is correct and has not expired
        if (user.otp === otp && user.otpExpiry > Date.now()) {
            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

            // Clear OTP and OTP expiry fields
            user.otp = null;
            user.otpExpiry = null;
            await user.save();

            res.status(200).json({ message: 'OTP verified', token });
        } else {
            res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUser, verifyOtp };
