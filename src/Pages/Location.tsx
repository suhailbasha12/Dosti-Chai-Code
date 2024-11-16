import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Location: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto my-8 p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">Our Dosti Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.904972806294!2d78.59520237430915!3d13.356184606331492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27f0024d8f4d7%3A0x684018df4d6bb524!2sDosti%20Chai!5e0!3m2!1sen!2sin!4v1725348464414!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    loading="lazy"
                    title="Coffee Shop Location"
                    className="border-0"
                ></iframe>
            </div>
            <Footer />
        </>
    );
};

export default Location;
