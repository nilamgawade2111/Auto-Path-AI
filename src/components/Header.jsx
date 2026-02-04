import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex justify-between">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">Autocar</Link>
        <div className="space-x-4">
          <Link to="/" className="text-base hover:text-gray-300">Home</Link>
          <Link to="/cars" className="text-base hover:text-gray-300">Buy Cars</Link>
          <Link to="/sell" className="text-base hover:text-gray-300">Sell Car</Link>
          <Link to="/about" className="text-base hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="text-base font-medium hover:text-gray-300">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
