import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedFleet from '../components/FeaturedFleet';

const HomePage = () => {
  const cars = [
    { id: 1, image: 'https://images.unsplash.com/photo-1563720227162-2e8d5c3d9f9e?w=400&h=300&fit=crop&auto=format', name: 'Sedan', category: 'Economy', seating: 5, fuel: 'Petrol', price: 30 },
    { id: 2, image: 'https://images.unsplash.com/photo-1571607388171-1c0d1e6e1c8e?w=400&h=300&fit=crop&auto=format', name: 'SUV', category: 'Luxury', seating: 7, fuel: 'Diesel', price: 50 },
    { id: 3, image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop&auto=format', name: 'Convertible', category: 'Sport', seating: 2, fuel: 'Petrol', price: 70 },
    { id: 4, image: 'https://images.unsplash.com/photo-1511391409765-0c1f0f4b6d7d?w=400&h=300&fit=crop&auto=format', name: 'Hatchback', category: 'Compact', seating: 5, fuel: 'Petrol', price: 25 },
    { id: 5, image: 'https://images.unsplash.com/photo-1549921296-3b4a4f8a2e8e?w=400&h=300&fit=crop&auto=format', name: 'Pickup Truck', category: 'Utility', seating: 5, fuel: 'Diesel', price: 60 },
    { id: 6, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format', name: 'Minivan', category: 'Family', seating: 7, fuel: 'Petrol', price: 40 },
    { id: 7, image: 'https://images.unsplash.com/photo-1511391409765-0c1f0f4b6d7d?w=400&h=300&fit=crop&auto=format', name: 'Coupe', category: 'Sport', seating: 4, fuel: 'Petrol', price: 55 },
    { id: 8, image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=400&h=300&fit=crop&auto=format', name: 'Luxury Sedan', category: 'Luxury', seating: 5, fuel: 'Petrol', price: 80 },
    { id: 9, image: 'https://images.unsplash.com/photo-1549923746-c502d2f3c8d3?w=400&h=300&fit=crop&auto=format', name: 'Electric Car', category: 'Electric', seating: 5, fuel: 'Electric', price: 90 },
    { id: 10, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop&auto=format', name: 'Crossover', category: 'Compact', seating: 5, fuel: 'Petrol', price: 45 },
    { id: 11, image: 'https://images.unsplash.com/photo-1511391409765-0c1f0f4b6d7d?w=400&h=300&fit=crop&auto=format', name: 'Roadster', category: 'Sport', seating: 2, fuel: 'Petrol', price: 75 },
    { id: 12, image: 'https://images.unsplash.com/photo-1549923746-c502d2f3c8d3?w=400&h=300&fit=crop&auto=format', name: 'Hybrid', category: 'Hybrid', seating: 5, fuel: 'Hybrid', price: 65 }
  ];

  return (
    <div>
      <HeroSection />
      <FeaturedFleet cars={cars} />
    </div>
  );
};

export default HomePage;
