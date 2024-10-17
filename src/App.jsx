// src/App.js
import React, { useState, useEffect } from 'react';
import ItemDisplay from './components/ItemDisplay';
import BanList from './components/BanList';
import History from './components/History';
import useApi from './hooks/useApi';
import './App.css';

const App = () => {
  const [banList, setBanList] = useState({ breed: [] });

  const handleRemoveItem = (category, item) => {
    setBanList(prevBanList => ({
      ...prevBanList,
      [category]: prevBanList[category].filter(bannedItem => bannedItem !== item)
    }));
  };

  
  const apiEndpoint = 'https://api.thecatapi.com/v1/images/search?has_breeds=1';
  const { data, isLoading, error, fetchRandomItem } = useApi(apiEndpoint, banList);

  const handleFetchCat = async () => {
    const newCat = await fetchRandomItem();
    if (newCat) {
      console.log("New cat fetched:", newCat);
    }
  };

  const handleBanBreed = () => {
    if (data && data.breed) {
      setBanList(prevBanList => ({
        ...prevBanList,
        breed: [...prevBanList.breed, data.breed]
      }));
    }
  };

  return (
    <div className="App">
      <h1>Random Cat Image Generator</h1>
      <button onClick={handleFetchCat}>Fetch Random Cat</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <img src={data.url} alt="Random Cat" style={{ maxWidth: '300px' }} />
          <p>Breed: {data.breed}</p>
          <button onClick={handleBanBreed}>Ban this breed</button>
        </div>
      )}
      <BanList banList={banList} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default App;
