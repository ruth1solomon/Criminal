import { Link } from 'react-router-dom';
import Card from './Card';

const Navbar = () => {
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
            <Link className="px-2 text-white no-underline" to="/About">About</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/Contact">Contact</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/Registerpage">Register here</Link>
          </li>
          <li className='inline-block px-5 list-none'>
            <Link className="px-2 text-white no-underline" to="/Userpage">userpage</Link>
          </li>
          <li>
            <Link className="px-2 text-white no-underline" to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar

