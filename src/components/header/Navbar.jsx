import { Link } from 'react-router-dom';
import Card from './Card';

// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">


        <div className="flex items-center">
          <Card />
          <span className="text-white text-2xl font-bold absolute left-1/3 transform -translate-x-1/2">
            Criminal Record
          </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link className="px-2 text-white no-underline" to="/">Home page</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/about">About</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/contact">Contact</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/register">Register here</Link>
          </li>

          <li>
            <Link className="px-2 text-white no-underline" to="/login">Login</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to="/user" className="text-white">Userpage</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>

  );
};

export default Navbar

