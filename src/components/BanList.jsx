// src/components/BanList.js
import React from 'react';

const BanList = ({ banList, onRemoveItem }) => {
  if (!banList || typeof banList !== 'object' || Object.keys(banList).length === 0) {
    return <div className="ban-list">No items banned yet.</div>;
  }

  return (
    <div className="ban-list">
      <h3>Ban List</h3>
      {Object.entries(banList).map(([category, items]) => (
        <div key={category}>
          <h4>{category}</h4>
          <ul>
            {Array.isArray(items) ? (
              items.map((item, index) => (
                <li key={`${category}-${index}`}>
                  {item}
                  <button onClick={() => onRemoveItem(category, item)}>Remove</button>
                </li>
              ))
            ) : (
              <li>{String(items)}</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BanList;
