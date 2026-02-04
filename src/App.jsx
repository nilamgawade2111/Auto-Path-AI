import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import PricingPage from './pages/PricingPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/locations" element={<div>Locations Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/sell" element={<div>Sell Car Page</div>} />
        <Route path="/about" element={<div>About Us Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
