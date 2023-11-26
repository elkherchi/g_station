
import React from 'react';
import './PompeInactive.css';

const PompesInactive = () => {
  
  const inactivePompes = ['Pompe I1', 'Pompe I2', 'Pompe I3'];

  return (
    <div className="pompes-inactive">
      <h1>Inactive Pompes</h1>
      <ul>
        {inactivePompes.map(pompe => (
          <li key={pompe}>{pompe}</li>
        ))}
      </ul>
    </div>
  );
};

export default PompesInactive;
