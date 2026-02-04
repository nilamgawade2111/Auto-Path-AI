import React from 'react';

const CarsPage = () => {
  const cars = [
    { id: 1, image: 'https://images.unsplash.com/photo-1563720227162-2e8d5c3d9f9e?w=400&h=300&fit=crop&auto=format', name: 'Sedan', category: 'Economy', seating: 5, fuel: 'Petrol', price: 30 },
    { id: 2, image: 'https://images.unsplash.com/photo-1571607388171-1c0d1e6e1c8e?w=400&h=300&fit=crop&auto=format', name: 'SUV', category: 'Luxury', seating: 7, fuel: 'Diesel', price: 50 }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <p className="text-gray-600">Category: {car.category}</p>
              <p className="text-gray-600">Seating: {car.seating}</p>
              <p className="text-gray-600">Fuel: {car.fuel}</p>
              <p className="text-gray-600">Price: ${car.price}/day</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
