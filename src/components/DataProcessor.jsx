import React, { useState, useEffect } from 'react';

const DataProcessor = ({ data }) => {
  const [processedData, setProcessedData] = useState(null);

  useEffect(() => {
    const processData = () => {
      // Example processing logic
      const transformedData = data.map(item => ({ ...item, processed: true }));
      setProcessedData(transformedData);
    };
    processData();
  }, [data]);

  return (
    <div>
      {processedData && <pre>{JSON.stringify(processedData, null, 2)}</pre>}
    </div>
  );
};

export default DataProcessor;