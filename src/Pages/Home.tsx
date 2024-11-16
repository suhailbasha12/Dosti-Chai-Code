import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Banner from '../Component/Banner';
import Footer from '../Component/Footer';
import bgimg from '../assets/imges/bg1.jpg'; 
import Tea from '../assets/imges/tea1.jpg'; 
import Coffee from '../assets/imges/coff.jpg'; 
import milkshake from '../assets/imges/mikshakes.jpg'; 
import mojitos from '../assets/imges/mojitos.jpg'; 
import juices from '../assets/imges/juices.jpg'; 
import milks from '../assets/imges/milks.jpg'; 
import snacks from '../assets/imges/snaks.jpg'; 


// Updated services data with six services
const services = [
  { id: 1, name: 'Tea', image: Tea,  },
  { id: 2, name: 'Coffee', image: Coffee },
  { id: 3, name: 'Milk', image: milks },
  { id: 4, name: 'Mojitos', image: mojitos },
  { id: 5, name: 'Milkshakes', image:  milkshake },
  { id: 6, name: 'Fresh Juices', image: juices },
  { id: 7, name: 'Snacks ', image: snacks },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Banner />
      <div
        className="p-8"
        style={{
          backgroundImage: `url(${bgimg})`, // Correctly use the imported image
          backgroundSize: 'cover',  // Ensures the image covers the entire background
          backgroundPosition: 'center',  // Centers the image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}
      >
       
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-200 p-2 rounded cursor-pointer hover:bg-red-300 transition duration-300 ease-in-out"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-46 object-cover mb-2 rounded"
              />
              <h3 className="text-xl font-bold pt-5 flex justify-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
