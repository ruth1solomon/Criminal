const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const generateOTP = require('otp-generator');
dotenv.config();

// Configure nodemailer transporter
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Function to send email
const sendEmail = async (email) => {
    const otp = generateOTP.generate(6, { upperCaseAlphabets: false, specialChars: false });

    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "SENDING OTP",
        text: `Your OTP is: ${otp}`,
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, otp };
    } catch (error) {
        console.error('Error sending email: ', error);
        return { success: false, error };
    }
};

module.exports = sendEmail;
