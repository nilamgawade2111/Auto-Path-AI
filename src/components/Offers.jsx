import React from 'react';
import { Link } from 'react-router-dom';

const offersData = [
  { id: 1, title: '20% Off First Rental', description: 'Get 20% off on your first rental!', link: '/offers/1' },
  { id: 2, title: 'Free GPS with Rental', description: 'Enjoy a free GPS with every rental!', link: '/offers/2' },
  { id: 3, title: 'Weekend Special', description: 'Rent for 3 days and pay for 2!', link: '/offers/3' },
  { id: 4, title: '10% Off Weekly Rentals', description: 'Save 10% on rentals of 7 days or more!', link: '/offers/4' },
  { id: 5, title: 'Free Child Seat', description: 'Get a free child seat with your rental!', link: '/offers/5' }
];

const Offers = () => {
  return (
    <div className="bg-yellow-300 p-4 text-center">
      <h2 className="text-2xl font-bold">Current Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {offersData.map((offer) => (
          <div key={offer.id} className="bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer hover:bg-opacity-90 hover:text-white">
            <h3 className="text-xl font-bold text-gray-600">{offer.title}</h3>
            <p>{offer.description}</p>
            <Link to={offer.link} className="text-blue-500 underline">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
