import React from 'react';
import './CuvesInactive.css';

const CuvesInactive = () => {
  const inactiveCuves = ['Cuve 1', 'Cuve 2']; 
  return (
    <div className="cuves-inactive">
      <h1>Inactive Cuves</h1>
      <ul>
        {inactiveCuves.map(cuve => (
          <li key={cuve}>{cuve}</li>
        ))}
      </ul>
    </div>
  );
};

export default CuvesInactive;
