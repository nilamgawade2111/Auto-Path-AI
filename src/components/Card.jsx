import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, category, seating, fuel, price }) => {
  return (
    <Link to={`/car/${id}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600">{category}</p>
        <p className="text-gray-600">Seating: {seating}</p>
        <p className="text-gray-600">Fuel: {fuel}</p>
        <p className="text-blue-600 font-bold">${price}/day</p>
      </div>
    </Link>
  );
};

export default Card;