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

      console.log("Full JSON Data:", fullJsonData);

      // Extract breed information
      let breed = "Unknown";
      let breedDescription = "No description available";
      let weight = "Unknown";
      let height = "Unknown";
      let lifeSpan = "Unknown";

      if (
        fullJsonData &&
        fullJsonData.breeds &&
        fullJsonData.breeds.length > 0
      ) {
        const breedInfo = fullJsonData.breeds[0];
        breed = breedInfo.name;
        breedDescription = breedInfo.description || "No description available";
        weight = breedInfo.weight?.metric || "Unknown";
        height = "Not provided by API"; // The API doesn't provide height information
        lifeSpan = breedInfo.life_span || "Unknown";
      }

      console.log("Breed:", breed);
      console.log("Breed Description:", breedDescription);
      console.log("Weight:", weight);
      console.log("Height:", height);
      console.log("Life Span:", lifeSpan);

      // Check if the item is banned
      const isItemBanned = banList.breed && banList.breed.includes(breed);

      if (!isItemBanned) {
        const newItem = {...item, breed, breedDescription, weight, height, lifeSpan};
        console.log("New Item:", newItem);
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
