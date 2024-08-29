import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="flex items-center space-x-4"> {/* Increased spacing between logo and title */}
      <img src='logo-color.png' className='cursor-pointer w-12 h-12 rounded-full' alt='Logo' /> {/* Increased logo size */}
      <Link to="/" className="text-white font-bold text-lg">criminal-logo</Link> {/* Slightly larger text */}
    </div>
  );
}

export default Card;

