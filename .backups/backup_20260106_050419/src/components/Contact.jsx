import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-4">We would love to hear from you!</p>
      <Link 
        to="/contact-form" 
        className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:bg-blue-600"
      >
        Go to Contact Form
      </Link>
    </div>
  );
};

export default Contact;