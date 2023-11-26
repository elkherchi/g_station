
import React from 'react';
import './PompeActive.css';

const PompesActive = () => {
  
  const activePompes = ['Pompe A1', 'Pompe A2', 'Pompe A3'];

  return (
    <div className="pompes-active">
      <h1>Active Pompes</h1>
      <ul>
        {activePompes.map(pompe => (
          <li key={pompe}>{pompe}</li>
        ))}
      </ul>
    </div>
  );
};

export default PompesActive;
