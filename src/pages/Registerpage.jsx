import Navbar from '../components/header/Navbar';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const RegisterPage = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessLicense: null, // For file upload
  });

  const [errors, setErrors] = useState({
    passwordError: '',
    confirmPasswordError: '',
  });

  const [otp, setOtp] = useState('');
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input
    });
  };

  const validatePasswords = () => {
    let passwordError = '';
    let confirmPasswordError = '';

    if (formData.password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      confirmPasswordError = 'Passwords do not match';
    }

    setErrors({ passwordError, confirmPasswordError });

    return !passwordError && !confirmPasswordError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      try {
        // Prepare form data for server
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        // Send registration request to the server
        const response = await axios.post(`http://localhost:5000/api/auth/register`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Assuming the server responds with a status indicating OTP sent
        if (response.status === 200) {
          setIsOtpModalOpen(true);
        }
      } catch (error) {
        console.error('Registration error:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleOtpChange = async (e) => {
    const value = e.target.value;
    setOtp(value);

    if (value.length === 6) {
      try {
        // Send OTP verification request to the server
        const response = await axios.post('http://localhost:5000/api/auth/verify-otp', { email: formData.email, otp: value });

        if (response.status === 200) {
          setIsOtpModalOpen(false);
          setIsAuthenticated(true);  // Update authentication state
          navigate('/user'); // Redirect to user page
        } else {
          console.error('OTP verification failed');
        }
      } catch (error) {
        console.error('OTP verification error:', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.passwordError && <p className="text-red-500 text-sm mt-2">{errors.passwordError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.confirmPasswordError && <p className="text-red-500 text-sm mt-2">{errors.confirmPasswordError}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="businessLicense" className="block text-gray-700 font-bold mb-2">Business License</label>
            <input
              type="file"
              id="businessLicense"
              name="businessLicense"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-700">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
          </div>
        </form>
      </div>

      <Modal
        isOpen={isOtpModalOpen}
        onRequestClose={() => setIsOtpModalOpen(false)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Enter OTP</h2>
        <p className="text-gray-700 mb-6 text-center">Please enter the 6-digit code sent to your email.</p>
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          maxLength={6}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          placeholder="Enter OTP"
        />
      </Modal>
    </>
  );
};

export default RegisterPage;
