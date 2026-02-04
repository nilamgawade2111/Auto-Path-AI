import React from 'react';

const Benefits = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold text-center">Benefits of Renting with Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/50" alt="Insurance" />
          <p>Insurance Coverage</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/50" alt="Support" />
          <p>24/7 Support</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://via.placeholder.com/50" alt="Cancellation" />
          <p>Free Cancellation</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
