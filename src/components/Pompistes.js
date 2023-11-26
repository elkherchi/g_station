import React from 'react';
import './Pompiste.css';

const Pompistes = () => {
  
  const pompistes = ['Pompiste 1', 'Pompiste 2', 'Pompiste 3'];

  return (
    <div className="pompistes">
      <h1>Pompistes</h1>
      <ul>
        {pompistes.map(pompiste => (
          <li key={pompiste}>{pompiste}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pompistes;
