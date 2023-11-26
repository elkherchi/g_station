// components/CuvesActive.js
import React from 'react';
import './CuvesActive.css';

const CuvesActive = () => {
  // Example content: list of active cuves
  const activeCuves = ['Cuve 101', 'Cuve 102', 'Cuve 103']; // This should come from a data source like an API

  return (
    <div className="cuves-active">
      <h1>Active Cuves</h1>
      <ul>
        {activeCuves.map(cuve => (
          <li key={cuve}>{cuve}</li>
        ))}
      </ul>
    </div>
  );
};

export default CuvesActive;
