import React from 'react';

const reviews = [
  {
    id: 1,
    text: "Great service! Highly recommend.",
    customer: "Customer A",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    text: "The best car rental experience I've had.",
    customer: "Customer B",
    image: "https://via.placeholder.com/150"
  }
];

const CustomerReviews = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold text-center">Customer Reviews</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
            <img src={review.image} alt={review.customer} className="rounded-full w-16 h-16 mb-2" />
            <p className="text-xl font-bold text-gray-600">{review.text}</p>
            <p className="text-gray-500">- {review.customer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;