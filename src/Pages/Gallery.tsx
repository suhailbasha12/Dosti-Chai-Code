// src/components/Gallery.tsx
import React from 'react';

// Import images
import img1 from '../assets/imges/g2.jpg';
import img2 from '../assets/imges/g3.jpg';
import img3 from '../assets/imges/g9.jpg';
import img4 from '../assets/imges/IMG-20240529-WA0057.jpg';
import img5 from '../assets/imges/g4.jpg';
import img6 from '../assets/imges/g10.jpg';
import img7 from '../assets/imges/g1.jpg';
import img8 from '../assets/imges/g5.jpg';
import img9 from '../assets/imges/IMG-20240529-WA0071.jpg';
import img10 from '../assets/imges/IMG-20240529-WA0052.jpg';
import Navbar from '../Component/Navbar';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Gallery: React.FC = () => {
  return (
    <>
    <Navbar />
    <h3 className="text-xl font-bold m-4 p-6">Gallery</h3>
    <div className="p-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
      
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img src={img} alt={`Gallery item ${index + 1}`} className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105" />
        </div>
      ))}
    </div>
    </>
  );
};

export default Gallery;
