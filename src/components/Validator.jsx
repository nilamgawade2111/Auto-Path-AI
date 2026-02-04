import React, { useState } from 'react';

const Validator = ({ tests }) => {
  const [validationResults, setValidationResults] = useState([]);

  const runTests = () => {
    const results = tests.map(test => ({
      name: test.name,
      passed: test.run()
    }));
    setValidationResults(results);
  };

  return (
    <div>
      <button onClick={runTests}>Run Validation Tests</button>
      <ul>
        {validationResults.map(result => (
          <li key={result.name}>{result.name}: {result.passed ? 'Passed' : 'Failed'}</li>
        ))}
      </ul>
    </div>
  );
};

export default Validator;