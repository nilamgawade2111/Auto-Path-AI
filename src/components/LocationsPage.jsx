import React, { useState } from 'react';

const LocationsPage = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Location submitted:', location);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Add a New Location</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="w-full p-2 border rounded-lg shadow-sm"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationsPage;
