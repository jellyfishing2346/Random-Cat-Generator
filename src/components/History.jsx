// src/components/History.js
import React from 'react';

const History = ({ history }) => (
  <div>
    <h3>History</h3>
    {history.map((item, index) => (
      <div key={index}>
        <img src={item.imageUrl} alt={`Cat ${index + 1}`} style={{ width: '100px' }} />
        <p>{item.breed}</p>
      </div>
    ))}
  </div>
);

export default History;
