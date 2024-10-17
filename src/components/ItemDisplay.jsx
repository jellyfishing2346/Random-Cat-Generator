// src/components/ItemDisplay.jsx
import React from 'react';

const ItemDisplay = ({ currentItem, isLoading, error, addToBanList, fetchRandomItem }) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentItem) return <div>No cat to display</div>;

  return (
    <div>
      <img src={currentItem.imageUrl} alt="Random cat" />
      <h2>Breed: {currentItem.breed}</h2>
      <p>Width: {currentItem.width}px, Height: {currentItem.height}px</p>
      <button onClick={() => addToBanList('breed', currentItem.breed)}>
  Ban {currentItem.breed} breed
      </button>
      <button onClick={fetchRandomItem}>Next Cat</button>
      
    </div>
  );
};

export default ItemDisplay;
