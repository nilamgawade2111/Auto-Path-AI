import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white text-center p-5">
        <h1 className="text-5xl font-bold mb-2">Welcome to the Car Test Application</h1>
        <p className="text-xl mb-4">Rent a car that fits your lifestyle.</p>
        <input type="text" placeholder="Pickup Location" className="p-2 rounded placeholder-black" />
        <input type="date" className="p-2 rounded mx-2 placeholder-black" />
        <input type="date" className="p-2 rounded mx-2 placeholder-black" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search Now</button>
      </div>
    </section>
  );
};

export default Hero;
