const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findUserByEmail, addUser } = require('../models/usermodel');

const JWT_SECRET = 'your_jwt_secret_key'; // Replace with a strong secret in production

// Register new user
const registerUser = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const existingUser = findUserByEmail(email);

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        email,
        password: hashedPassword,
        firstName,
        lastName
    };

    addUser(newUser);

    res.status(201).json({ message: 'User registered successfully' });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = findUserByEmail(email);

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, message: 'Login successful' });
};

module.exports = { registerUser, loginUser };