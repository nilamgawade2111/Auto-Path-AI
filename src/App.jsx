import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import ManagerDashboard from './components/ManagerDashboard';
import MarketingDashboard from './pages/MarketingDashboard';

const App = () => {
  const userRole = 'manager'; // This should be dynamically set based on authentication

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/marketing-dashboard" element={<MarketingDashboard />} />
        {userRole === 'manager' && <Route path="/dashboard" element={<ManagerDashboard />} />}
      </Routes>
    </Router>
  );
};

export default App;
