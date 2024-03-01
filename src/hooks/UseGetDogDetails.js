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

        if (subBreeds.length === 0) {
          const imagesResponse = await getSubBreedImages(breed);
          const mainBreedDetails = {
            subBreed: breed,
            images: imagesResponse.message || [],
          };
          setDetails([mainBreedDetails]);
        } else {
          const imagesPromises = subBreeds.map(async (subBreed) => {
            try {
              const imagesResponse = await getSubBreedImages(breed, subBreed);
              return {
                subBreed,
                images: imagesResponse.message || [],
              };
            } catch (imageError) {
              console.error(`Err getSubBreedImages images ${subBreed}:`, imageError);
              return {
                subBreed,
                images: [],
              };
            }
          });

          const subBreedsWithImages = await Promise.all(imagesPromises);
          setDetails(subBreedsWithImages);
        }
      } catch (err) {
        console.error(`Err getSubBreed ${breed}:`, err);
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
