import Navbar from '../components/header/Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to the Criminal Record System. Our mission is to provide accurate and up-to-date
          criminal record information to authorized personnel.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our platform is designed to securely manage and retrieve criminal records,
          ensuring that only authorized users have access to sensitive information.
          We prioritize security and data integrity, offering a user-friendly interface
          to make your work more efficient.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          For any inquiries, please feel free to contact us through the contact page.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:info@criminalrecordsystem.com"
            className="text-gray-600 hover:text-gray-800"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Criminal Record System. All rights reserved.</p>
            <p className="mt-2 text-gray-400">
              References: <a href="https://www.justice.gov/" className="text-blue-400 hover:text-blue-600">Justice.gov</a>, <a href="https://www.fbi.gov/" className="text-blue-400 hover:text-blue-600">FBI.gov</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
