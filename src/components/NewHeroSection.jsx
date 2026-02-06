import React from 'react';

const NewHeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920&h=1080&fit=crop&auto=format)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
      <div className="relative z-10 text-white text-center p-8">
        <h1 className="text-6xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-2xl mb-6">Find the perfect car for your journey.</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 hover:scale-105">Explore Now</button>
      </div>
    </section>
  );
};

export default NewHeroSection;
