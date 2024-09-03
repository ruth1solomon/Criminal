/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/header/Navbar';

const LoginPage = ({ setIsAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Update the URL to use http for local development
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);

            if (response.status === 200) {
                console.log('Login successful');
                setIsAuthenticated(true); // Update authentication status
                navigate('/user'); // Redirect to the user page upon successful login
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid email or password');
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                    <div className="mt-6 text-center">
                        <p className="text-gray-700">
                            Don&apos;t have an account?{' '}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginPage;
