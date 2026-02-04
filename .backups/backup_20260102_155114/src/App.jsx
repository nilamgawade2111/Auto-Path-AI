import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleCard from './components/VehicleCard';
import Offers from './components/Offers';
import Benefits from './components/Benefits';
import Locations from './components/Locations';
import CustomerReviews from './components/CustomerReviews';
import BookingSummary from './components/BookingSummary';
import Contact from './components/Contact';
import Services from './components/Services';
import AboutUs from './pages/AboutUs';
import TestPage from './components/TestPage';

function App() {
  return (
    <BrowserRouter>
      <div className="text-center">
        <Header />
        <Hero />
        <Offers />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
          <VehicleCard vehicle={{ image: 'https://via.placeholder.com/150', name: 'Car 1', category: 'SUV', seatingCapacity: 5, fuelType: 'Gas', pricePerDay: 50 }} />
          <VehicleCard vehicle={{ image: 'https://via.placeholder.com/150', name: 'Car 2', category: 'Sedan', seatingCapacity: 4, fuelType: 'Diesel', pricePerDay: 40 }} />
          <VehicleCard vehicle={{ image: 'https://via.placeholder.com/150', name: 'Car 3', category: 'Hatchback', seatingCapacity: 4, fuelType: 'Electric', pricePerDay: 60 }} />
        </div>
        <Benefits />
        <Locations />
        <CustomerReviews />
        <BookingSummary />
        <Contact />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/customer-reviews" element={<CustomerReviews />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;