import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ItemService from './Pages/ItemServices';
import Contact from './Pages/Contact';
import Location from './Pages/Location';
import About from './Pages/About';
import Review from './Pages/Review';
import ItemServices from './Pages/ItemServices'; // Page to display child services
import Services from './Pages/Gallery';
import Gallery from './Pages/Gallery';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ItemServices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
