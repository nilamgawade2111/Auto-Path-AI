import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MarketingDashboard = () => {
  const [metrics, setMetrics] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/metrics'); // Replace with actual API endpoint
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 60000); // Refresh data every minute
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Marketing Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(metrics).map(([key, value]) => (
          <div key={key} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4">
            <h2 className="text-xl font-semibold text-gray-800">{key}</h2>
            <p className="text-gray-600">{value}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="mt-4 inline-block text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default MarketingDashboard;
