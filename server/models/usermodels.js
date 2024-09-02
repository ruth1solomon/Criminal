const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: { type: String, unique: true },
    password: String,
    businessLicense: String, // Field to store the path of the uploaded file
    otp: String,
    otpExpiry: Date,
});

module.exports = mongoose.model('User', UserSchema);