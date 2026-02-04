import React from 'react';

const Locations = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold text-center">Our Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-200 p-4 rounded">City 1</div>
        <div className="bg-gray-200 p-4 rounded">City 2</div>
      </div>
    </section>
  );
};

export default Locations;
