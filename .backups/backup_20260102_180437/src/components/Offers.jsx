import React from 'react';

const offersData = [
  { id: 1, title: '20% Off First Rental', description: 'Get 20% off on your first rental!', link: '/offers/1' },
  { id: 2, title: 'Free GPS with Rental', description: 'Enjoy a free GPS with every rental!', link: '/offers/2' },
  { id: 3, title: 'Weekend Special', description: 'Rent for 3 days and pay for 2!', link: '/offers/3' },
  { id: 4, title: '10% Off Weekly Rentals', description: 'Save 10% on rentals of 7 days or more!', link: '/offers/4' },
  { id: 5, title: 'Free Child Seat', description: 'Get a free child seat with your rental!', link: '/offers/5' },
  { id: 6, title: 'Late Return Special', description: 'Return your vehicle late without extra charges!', link: '/offers/6' },
  { id: 7, title: 'Referral Bonus', description: 'Refer a friend and get a discount on your next rental!', link: '/offers/7' },
  { id: 8, title: 'Holiday Special', description: 'Special rates during holiday seasons!', link: '/offers/8' },
  { id: 9, title: 'Corporate Discounts', description: 'Exclusive discounts for corporate clients!', link: '/offers/9' },
  { id: 10, title: 'Loyalty Program', description: 'Join our loyalty program for additional benefits!', link: '/offers/10' },
];

const Offers = () => {
  return (
    <div className="bg-yellow-300 p-4 text-center">
      <h2 className="text-2xl font-bold">Current Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {offersData.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer hover:bg-opacity-90 hover:text-white">
            <h3 className="text-xl font-bold text-gray-600">{offer.title}</h3>
            <p>{offer.description}</p>
            <a href={offer.link} className="text-blue-500 underline">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;