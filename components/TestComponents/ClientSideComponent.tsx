import React, { useState } from 'react';
import { useClient } from '../../utils/useClient'; // Update the path as per your file structure

const ClientSideComponent: React.FC = () => {
  useClient(); // Using the useClient hook to mark the component as client-side

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Client Side Component (CSR)</h2>
      <p>Number: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default ClientSideComponent;
