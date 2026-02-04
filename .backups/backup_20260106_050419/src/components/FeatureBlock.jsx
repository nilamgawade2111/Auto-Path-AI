import React from 'react';

const FeatureBlock = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer hover:bg-opacity-90">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureBlock;
