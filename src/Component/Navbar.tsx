import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../assets/imges/img.jpg'; // Ensure you have a valid path to the logo
import bgImage from '../assets/imges/bbg3.jpg'; // Import your background image
import { HiMenu, HiX } from 'react-icons/hi'; // Import icons for menu and close

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  // Function to toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className="p-2 text-white flex flex-wrap items-center justify-between bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`, // Applying background image
      }}
    >
      {/* Logo and Brand */}
      <div className="flex items-center mb-4 sm:mb-0">
        <img
          src={myImage}
          alt="logo"
          height={60}
          width={60}
          className="object-contain rounded-full" // Making the logo round
        />
        <Link to="/" className="text-lg font-bold pl-4 hover:text-orange-500">
          Dosti Chai
        </Link>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col sm:flex-row font-bold space-y-4 sm:space-y-0 sm:flex ${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:space-x-8`}
      >
        <Link to="/" className="block py-2 px-4 hover:text-orange-400 font-extrabold">
          Home
        </Link>
        <Link to="/about" className="block py-2 px-4 hover:text-orange-400 font-bold">
          About
        </Link>
        <Link to="/gallery" className="block py-2 px-4 hover:text-orange-400 font-bold">
          Gallery
        </Link>
        <Link to="/contact" className="block py-2 px-4 hover:text-orange-400 font-bold">
          Contact
        </Link>
        <Link to="/review" className="block py-2 px-4 hover:text-orange-400 font-bold">
          Review
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
