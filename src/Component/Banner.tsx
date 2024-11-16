import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import myImage1 from '../assets/imges/js.jpg'; // Update the path as necessary
import myImage2 from '../assets/imges/banner1.jpg'; // Update the path as necessary
import myImage3 from '../assets/imges/banner.jpg'; // Update the path as necessary

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-96 flex items-center justify-center text-center relative">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <div className="h-96">    
          <img src={myImage1} alt="Slide 1" className="object-cover h-full w-full" /> 
        </div>

        {/* Slide 2 */}
        <div className="h-96">
          <img src={myImage2} alt="Slide 2" className="object-cover h-full w-full" />
        </div>

        {/* Slide 3 */}
        <div className="h-96">
          <img src={myImage3} alt="Slide 3" className="object-cover h-full w-full" />
        </div>
      </Carousel>

      <div className="absolute bottom-10 w-full">
        <div className="overflow-hidden whitespace-nowrap">
          <p className="inline-block font-bold bg-black animate-marquee text-white py-1 px-4">"On Friendship Day, enjoy a special chai for just 1 rupee!"</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
