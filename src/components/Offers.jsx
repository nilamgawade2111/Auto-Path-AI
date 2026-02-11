import React from 'react';
import { Link } from 'react-router-dom';

const offersData = [
  { id: 1, title: '20% Off First Rental', description: 'Get 20% off on your first rental!', link: '/offers/1' }
];

const Offers = () => {
  return (
    <div className="bg-yellow-300 p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Current Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offersData.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer hover:bg-opacity-90 hover:text-white">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
            <p className="text-gray-600 mb-4">{offer.description}</p>
            <Link to={offer.link} className="text-blue-600 underline hover:text-blue-800">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;