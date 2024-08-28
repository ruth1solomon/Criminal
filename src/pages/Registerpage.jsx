import Navbar from '../components/header/Navbar'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const RegisterPage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    passwordError: '',
    confirmPasswordError: ''
  });

  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      setIsAuthenticated(true)
      console.log('User registered:', formData);

      navigate('/user'); // Redirect to user page after successful registration
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
          <div className="mb-6">
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
    </>
  );
};

export default RegisterPage;
