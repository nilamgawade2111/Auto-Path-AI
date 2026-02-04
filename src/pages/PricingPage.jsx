import React from 'react';

const PricingPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Pricing</h1>
      <p className="text-gray-600">Explore our competitive pricing plans tailored to your needs.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-bold mb-2">Basic Plan</h2>
          <p className="text-gray-600">$19.99/month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-bold mb-2">Standard Plan</h2>
          <p className="text-gray-600">$49.99/month</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all">
          <h2 className="text-xl font-bold mb-2">Premium Plan</h2>
          <p className="text-gray-600">$99.99/month</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
