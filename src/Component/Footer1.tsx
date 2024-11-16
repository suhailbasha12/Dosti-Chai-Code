import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pl-8 py-4">
            <div className="text-center">
                <div className="mb-4 flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white hover:text-gray-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white hover:text-gray-400" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-gray-400" />
                    </a>
                </div>
                <p>© 2024 Dosti Chai. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
