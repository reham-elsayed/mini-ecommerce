import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/download.svg'
import { FaShoppingCart } from 'react-icons/fa';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-pink-300 px-4">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
        <span className="inline-block">
          <img src={logo} alt="Remo Commerce Logo" width={200} height={30} />
        </span>
      </Link>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/" className="text-white hover:text-blue-200">About</Link>
          <Link to="/" className="text-white hover:text-blue-200">Contact</Link>
        </div>

       
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
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
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-5 flex flex-col  bg-pink-300 space-y-2">
          <Link to="/" className="inline-block text-white hover:text-blue-200">Home</Link>
          <Link to="/" className="inline-block text-white hover:text-blue-200">About</Link>
          <Link to="/" className="inline-block text-white hover:text-blue-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
