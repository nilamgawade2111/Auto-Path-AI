import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';
import APIHandler from './components/APIHandler';
import DataProcessor from './components/DataProcessor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/api" element={<APIHandler endpoint="/api/data" method="GET" />} />
        <Route path="/process" element={<DataProcessor data={[]} />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;