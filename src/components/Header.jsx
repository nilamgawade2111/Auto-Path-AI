import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">My App</h1>
      <nav>
        <Link to="/login" className="text-white hover:underline">Login</Link>
        <Link to="/signup" className="ml-4 text-white hover:underline">Sign Up</Link>
        <Link to="/marketing-dashboard" className="ml-4 text-white hover:underline">Marketing Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;