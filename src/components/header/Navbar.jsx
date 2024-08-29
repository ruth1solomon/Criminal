import { Link } from 'react-router-dom';
import { useState } from 'react';
import Card from './Card';

// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Card />
          <span className="text-white text-2xl font-bold ml-4">Criminal Record</span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul className={`lg:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link className="block lg:inline-block px-2 py-1 text-white no-underline" to="/">Home page</Link>
          </li>
          <li>
            <Link className="block lg:inline-block px-2 py-1 text-white no-underline" to="/about">About</Link>
          </li>
          <li>
            <Link className="block lg:inline-block px-2 py-1 text-white no-underline" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="block lg:inline-block px-2 py-1 text-white no-underline" to="/register">Register here</Link>
          </li>
          <li>
            <Link className="block lg:inline-block px-2 py-1 text-white no-underline" to="/login">Login</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/user" className="block lg:inline-block px-2 py-1 text-white no-underline">User Page</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
