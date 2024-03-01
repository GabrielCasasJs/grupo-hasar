import { useState, useEffect } from 'react';

import {
    getSubBreeds,
    getSubBreedImages,
} from '../apis/dogs';

const UseGetDogDetails = (breed) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subBreedsResponse = await getSubBreeds(breed);
        const subBreeds = subBreedsResponse.message || [];

        const imagesPromises = subBreeds.map(async (subBreed) => {
          try {
            const imagesResponse = await getSubBreedImages(breed, subBreed);
            return {
              subBreed,
              images: imagesResponse.message || [],
            };
          } catch (imageError) {
            console.error(`Error getSubBreedImages imágenes para ${subBreed}:`, imageError);
            return {
              subBreed,
              images: [],
            };
          }
        });

        const subBreedsWithImages = await Promise.all(imagesPromises);

        setDetails(subBreedsWithImages);
      } catch (err) {
        console.error(`Error obteniendo subrazas para ${breed}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [breed]);

  return { details, loading, error };
};

export default UseGetDogDetails;
