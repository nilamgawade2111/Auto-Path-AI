import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4">
      <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{vehicle.name}</h3>
      <p className="text-gray-600">Category: {vehicle.category}</p>
      <p className="text-gray-600">Seats: {vehicle.seatingCapacity}</p>
      <p className="text-gray-600">Fuel: {vehicle.fuelType}</p>
      <p className="text-lg font-bold">${vehicle.pricePerDay}/day</p>
    </div>
  );
};

export default VehicleCard;
