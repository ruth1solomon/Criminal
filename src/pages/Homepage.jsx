import Navbar from "../components/header/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Welcome to the Criminal Record System
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Secure, Reliable, and Efficient Record Management
        </p>
        <div className="flex justify-center">
          <Link
            to="/register"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Let’s Get You Started
          </Link>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Criminal Record System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
