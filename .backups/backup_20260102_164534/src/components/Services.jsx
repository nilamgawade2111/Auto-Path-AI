import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Link 
          to="/services/1" 
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
        >
          <h3 className="text-xl font-bold">Service 1</h3>
          <p className="text-gray-600">Detailed description of Service 1.</p>
        </Link>
        <Link 
          to="/services/2" 
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
        >
          <h3 className="text-xl font-bold">Service 2</h3>
          <p className="text-gray-600">Detailed description of Service 2.</p>
        </Link>
        <Link 
          to="/services/3" 
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
        >
          <h3 className="text-xl font-bold">Service 3</h3>
          <p className="text-gray-600">Detailed description of Service 3.</p>
        </Link>
      </div>
    </section>
  );
};

export default Services;
