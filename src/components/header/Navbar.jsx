import {Link} from 'react-router-dom';
import Card from './Card';

const Navbar = () => {
  return (
    <div className='container min-h-screen py-5 bg-center bg-cover bg-grey-500 px-28'>
    
    <nav className="flex items-center">
    <Card/>
      <ul className='flex-1 text-center'>
        
        <li className='inline-block px-5 list-none'><Link  className="px-2 text-black no-underline"to="/About">About</Link> </li>
        <li className='inline-block px-5 list-none'> <Link className="px-2 text-black no-underline" to="/Contact">Contact</Link> </li>
        <li className='inline-block px-5 list-none'> <Link className="px-2 text-black no-underline" to="/Registerpage">Register here</Link> </li>
        <li className='inline-block px-5 list-none'><Link  className="px-2 text-black no-underline"to="/Userpage">welcome to user page</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar