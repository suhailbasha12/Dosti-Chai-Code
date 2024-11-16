import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pl-8 py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Slogan */}
        <div>
          <h2 className="text-xl font-bold">Dosti Vineeth</h2>
          {/* <p className="mt-2">SOLOGAN COMPANY</p> */}
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="font-semibold">Address :</h3>
          <p className="text-white mt-4">
            9H4X+C56, Ethur circle, Punganur Bypass, Punganur Rural, Andhra Pradesh 517247
          </p>
          <p className="text-white mt-4">
            Contact No : 7032076679
          </p>
        </div>

        {/* Column 2 */}
        {/* <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </div> */}

        {/* Operational Hours */}
        <div >
          <h3 className="font-semibold">Shop Open Hours :</h3>
          <ul className="mt-2 space-y-1">
            <li>Mon to Sat : 5 : 00 AM - 10 : 30 PM</li>
            <li>Sun : 03 : 00 PM – 10 : 00 PM</li>
            
          </ul>
        </div>



      </div>

      <hr className="my-4 border-gray-700" />

      <div className="text-center">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-400" />
          </a>
          <a href="https://www.instagram.com/dosti_chai_cafe_official?igsh=dnJ1emR4Ymp2MGQ1" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-400" />
          </a>
        </div>
        <p>© 2024 Dosti Chai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
