import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Img from '../assets/imges/bbg1.jpg'
import Footer1 from '../Component/Footer1';

const ContactLocation: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('https://formspree.io/f/meojdgry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else if (response.status === 400) {
        setError('There was an issue with your submission. Please check your details and try again.');
      } else if (response.status === 500) {
        setError('The server is currently down. Please try again later.');
      } else {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        setError('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to send the message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="container mx-auto  p-8 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${Img})`, // Path to your image
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Our Dosti Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Directions Section */}
          <div className=" p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Directions</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.904972806294!2d78.59520237430915!3d13.356184606331492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27f0024d8f4d7%3A0x684018df4d6bb524!2sDosti%20Chai!5e0!3m2!1sen!2sin!4v1725348464414!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              title="Coffee Shop Location"
              className="border-0"
            ></iframe>
            <p className="text-black mt-4">
              9H4X+C56, Ethur circle, Punganur Bypass, Punganur Rural, Andhra Pradesh 517247
            </p>
          </div>

          {/* Contact Us Section */}
          <div className=" p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Get in touch!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border  rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
                required
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-black"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-[#db4a88] text-white font-bold rounded hover:bg-[#eab308] transition-colors"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </form>
            {error && <p className="text-red-500 mt-4 font-bold">{error}</p>}
            {success && <p className="text-black mt-4 font-bold">{success}</p>}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
    
  );
};

export default ContactLocation;
