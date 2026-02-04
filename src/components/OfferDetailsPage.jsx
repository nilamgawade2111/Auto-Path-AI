import React from 'react';

const OfferDetailsPage = ({ match }) => {
  const offerId = match.params.id;
  // Fetch offer details based on offerId or use static data

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Offer Details for Offer {offerId}</h1>
      <p className="mt-4">Details about the offer will go here.</p>
    </div>
  );
};

export default OfferDetailsPage;