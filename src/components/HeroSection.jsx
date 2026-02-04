import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState({ location: '', date: '', carType: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549924231-f129b911e442?w=1200&h=500&fit=crop&auto=format)' }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Ride</h1>
        <p className="mb-6">Explore our fleet and book your car today!</p>
        <div className="flex space-x-4">
          <input type="text" name="location" placeholder="Location" value={searchParams.location} onChange={handleInputChange} className="p-2 rounded-lg shadow-sm" />
          <input type="date" name="date" value={searchParams.date} onChange={handleInputChange} className="p-2 rounded-lg shadow-sm" />
          <input type="text" name="carType" placeholder="Car Type" value={searchParams.carType} onChange={handleInputChange} className="p-2 rounded-lg shadow-sm" />
          <Link to="/search-results" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md">Search</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
