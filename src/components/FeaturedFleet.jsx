import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedFleetCard = ({ car }) => {
  return (
    <Link to={`/cars/${car.id}`} className="block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
        <p className="text-gray-600">Category: {car.category}</p>
        <p className="text-gray-600">Seating: {car.seating}</p>
        <p className="text-gray-600">Fuel: {car.fuel}</p>
        <p className="text-gray-800 font-bold">${car.price}/day</p>
      </div>
    </Link>
  );
};

const FeaturedFleet = ({ cars }) => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Fleet</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map(car => (
          <FeaturedFleetCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedFleet;
