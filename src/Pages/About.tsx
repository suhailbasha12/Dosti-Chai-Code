// src/components/About.tsx
import React from 'react';
import Navbar from '../Component/Navbar';
// import Footer from '../Component/Footer';
import AllImg from '../assets/imges/all.jpg';
import bgImage from '../assets/imges/bbg4.jpg'; // Import your background image

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <section
        className="py-16 m-16 p-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`, // Apply the background image
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-[#4c0519] mb-4">About Our Dosti Chai</h2>
            <p className="text-black mb-6">
              At Dosti Chai, we believe that every cup of chai tells a story. From sourcing our premium leaves to perfecting the brew,
              we put our heart into every step to ensure an exceptional experience. Whether you're grabbing a quick espresso on the go or savoring a cozy latte with friends,
              we aim to make each visit memorable. Passionate about quality and sustainability, we strive to create a welcoming space for all.
            </p>
            <p className="text-black-600">
              Come join us for a cup and be a part of our Chai community, where our friendly baristas are always ready to brighten your day with a smile.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              // src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
              src={AllImg}
              alt="Coffee shop ambiance"
              className="rounded-lg shadow-md object-cover w-full h-64 md:h-96"
            />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default About;
