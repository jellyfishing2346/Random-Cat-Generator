// src/hooks/useApi.jsx
import { useCallback, useState } from 'react';

const useApi = (apiEndpoint, banList) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomItem = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      
      // The Cat API returns an array, so we take the first item
      const item = jsonData[0];
      
      // Fetch breed information
      const fullResponse = await fetch(
        `https://api.thecatapi.com/v1/images/${item.id}`
      );

      const fullJsonData = await fullResponse.json();

      // Extract breed information
      let breed = "Unknown";
      if (
        fullJsonData &&
        fullJsonData.breeds &&
        fullJsonData.breeds.length > 0
      ) {
        breed = fullJsonData.breeds[0].name;
      }
      console.log("Breed:", breed); // Log the breed for debugging

      // Check if the item is banned
      const isItemBanned = banList.breed && banList.breed.includes(breed);

      if (!isItemBanned) {
        const newItem = {...item, breed};
        setData(newItem);
        return newItem;
      } else {
        return fetchRandomItem(); // Recursively fetch again if item is banned
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [apiEndpoint, banList]);

  return { data, isLoading, error, fetchRandomItem };
};

export default useApi;
