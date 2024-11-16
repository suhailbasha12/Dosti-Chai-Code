// ItemServices.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar';
// import Footer from '../Component/Footer';
import ltea from '../assets/imges/letea.jpg';
import tea from '../assets/imges/img.webp';
import blacktea from '../assets/imges/blacktea.jpeg';
import greentea from '../assets/imges/greentea.jpg';
import gingertea from '../assets/imges/zingertea.jpg';
import sonticoffee from '../assets/imges/sonticoffee.jpg';
import coffee from '../assets/imges/coffe.jpg';
import blackcoffee from '../assets/imges/blackcoffee.jpg';
import fliter from '../assets/imges/filtercoffee.jpg';
import coldcoffee from '../assets/imges/coldcoffee.jpg';
import milk from '../assets/imges/milk.jpg';
import badam from '../assets/imges/badammilk.jpg';
import pista from '../assets/imges/pisthamilk.jpg';
import ragi from '../assets/imges/ragimilk.jpg';
import boost from '../assets/imges/boost.jpeg';
import horlicks from '../assets/imges/hoslicks.jpeg';
import Orio from '../assets/imges/orioshake.jpeg';
import chocolate from '../assets/imges/chocolate.jpg';
import butter from '../assets/imges/butter.jpg';
import vanilla from '../assets/imges/vennela.jpg';
import mango from '../assets/imges/mango.jpg';
import painaple from '../assets/imges/painaple.jpg';
import rose from '../assets/imges/rosemilk.jpg';
import strawberry from '../assets/imges/strawberry.jpg';
import dryfruit from '../assets/imges/dryfruit.jpg';
import samosa from '../assets/imges/samosa.jpg';
import bajji from '../assets/imges/bajji.jpg';
import bonda from '../assets/imges/bonda.jpg';
import egg from '../assets/imges/egg.jpg';
import lime from '../assets/imges/lime.jpg';
import blue from '../assets/imges/blue.jpg';
import original from '../assets/imges/original.jpg';
import grape from '../assets/imges/grape.jpg';
import lemoncool from '../assets/imges/lemoncool.jpg';
import limmit from '../assets/imges/limemint.jpg';
import soda from '../assets/imges/lemonsoda.jpg';
import orange from '../assets/imges/orange.jpg';
import water from '../assets/imges/watermelon.jpg';
import grapes from '../assets/imges/grapsjuice.jpg';
import mosambi from '../assets/imges/mosambi.jpg';
import banana from '../assets/imges/banana.jpg';
import paineapple from '../assets/imges/painaplejuice.jpg';
import sapota from '../assets/imges/sapota.jpg';
import mangoj from '../assets/imges/mangojuice.jpg';




// Define the type for a single service
interface Service {
  id: number;
  name: string;
  image: string;
  price: string;
}

// Define the type for the childServices object, using number as keys
const childServices: Record<number, Service[]> = {
  1: [
    { id: 101, name: 'Tea', image: tea, price: 'Rs: 10/-' },
    { id: 102, name: 'Lemon Tea', image: ltea, price: 'Rs: 20/-' },
    { id: 103, name: 'Black Tea', image: blacktea, price: 'Rs: 20/-' },
    { id: 102, name: 'Green Tea', image: greentea, price: 'Rs: 20/-' },
    { id: 103, name: 'Ginger tea', image: gingertea, price: 'Rs: 20/-' },
  ],
  2: [
    { id: 201, name: 'Coffee', image: coffee, price: 'Rs: 20/-' },
    { id: 202, name: 'Sonti Coffee', image: sonticoffee, price: 'Rs: 20/-' },
    { id: 201, name: 'Black Coffee', image: blackcoffee, price: 'Rs: 30/-' },
    { id: 202, name: 'Filter Coffee', image: fliter, price: 'Rs: 30/-' },
    { id: 202, name: 'Cold Coffee', image: coldcoffee, price: 'Rs: 69/-' }
  ],
  3: [
    { id: 301, name: 'Milk', image: milk, price: 'Rs: 15/-' },
    { id: 302, name: 'Badam Milk', image: badam, price: 'Rs: 20/-' },
    { id: 303, name: 'Pista Milk', image: pista, price: 'Rs: 20/-' },
    { id: 304, name: 'Ragi Milk', image: ragi, price: 'Rs: 20/-' },
    { id: 305, name: 'Boost', image: boost, price: 'Rs: 20/-' },
    { id: 306, name: 'Horlicks', image: horlicks, price: 'Rs: 20/-' }
  ],
  4: [
    { id: 401, name: 'Lime Cordial', image: lime, price: 'Rs: 59/-' },
    { id: 402, name: 'Blue Curacao', image: blue, price: 'Rs: 69/-' },
    { id: 403, name: 'Original Flavour', image: original, price: 'Rs: 59/-' },
    { id: 404, name: 'Grape', image: grape, price: 'Rs: 59/-' },
    { id: 405, name: 'Lemon Cool', image: lemoncool, price: 'Rs: 59/-' },
    { id: 406, name: 'lime & Mint', image: limmit, price: 'Rs: 59/-' },
    { id: 407, name: 'Lemon Soda', image: soda, price: 'Rs: 30/-' },


  ],
  5: [
    { id: 401, name: 'Orio Milk Shake', image: Orio, price: 'Rs: 69/-' },
    { id: 402, name: 'Chocolate Shake', image: chocolate, price: 'Rs: 59/-' },
    { id: 403, name: 'Butter Scotch Shake', image: butter, price: 'Rs: 59/-' },
    { id: 404, name: 'Strawberry', image: strawberry, price: 'Rs: 59/-' },
    { id: 405, name: 'Vanilla Shake', image: vanilla, price: 'Rs: 59/-' },
    { id: 406, name: 'Mango Shake', image: mango, price: 'Rs: 59/-' },
    { id: 407, name: 'Painapple', image: painaple, price: 'Rs: 69/-' },
    { id: 408, name: 'Dry Fruit', image: dryfruit, price: 'Rs: 79/-' },
    { id: 409, name: 'Rose Milk', image: rose, price: 'Rs: 69/-' },
  ],
  6: [
    { id: 601, name: 'Orange', image:orange , price: 'Rs: 40/-' },
    { id: 602, name: 'Watermelon', image: water , price: 'Rs: 30/-' },
    { id: 603, name: 'Grapes', image: grapes, price: 'Rs: 40/-' },
    { id: 604, name: 'Mosambi', image: mosambi , price: 'Rs: 40/-' },
    { id: 605, name: 'Banana', image: banana , price: 'Rs: 40/-' },
    { id: 606, name: 'Sapota', image: sapota, price: 'Rs: 40/-' },
    { id: 607, name: 'Painapple ', image: paineapple, price: 'Rs: 40/-' },
    { id: 608, name: 'Mango', image: mangoj, price: 'Rs: 50/-' },
  ],
  7: [
    { id: 701, name: 'Samosa', image: samosa, price: 'Rs: 5/-' },
    { id: 702, name: 'Bajji', image: bajji, price: 'Rs: 20/-' },
    { id: 703, name: 'Egg Puffs', image: egg, price: 'Rs: 20/-' },
    { id: 702, name: 'Bonda', image: bonda, price: 'Rs: 20/-' },
    // { id: 703, name: 'Egg Puffs', image: egg, price: 'Rs: 20/-' }
  ],
  // Add additional child services for remaining parent services
};

const ItemServices: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get parent service ID from URL
  const serviceId = Number(id); // Convert ID to number
  const selectedServices = childServices[serviceId] || []; // Fetch child services based on parent service ID

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selectedServices.map((service) => (
            <div
              key={service.id}
              className="bg-200 p-4 rounded cursor-pointer hover:bg-green-300 transition duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-56 object-cover mb-2 rounded"
              />
              <div className='flex  justify-around'>
                <h3 className="text-xl font-semibold ">{service.name}</h3>
                <p className="text-lg font-medium ">{service.price}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ItemServices;
