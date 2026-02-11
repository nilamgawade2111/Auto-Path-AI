import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white text-center">
      <h1 className="text-3xl font-bold">Welcome to Coding Agent</h1>
      <nav className="mt-2">
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/offers" className="mx-2 hover:underline">Offers</Link>
        <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
        <Link to="/about" className="mx-2 hover:underline">About</Link>
      </nav>
    </header>
  );
};

export default Header;
