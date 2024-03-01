import { useContext } from 'react';

import AuthContext from '../context/AuthContext';
import { storeData } from '../helpers/storageData';

function useFavorites() {
  const { favorites, setFavorites } = useContext(AuthContext);

  const isFavorite = (subBreed) => {
    return favorites.some((fav) => fav.subBreed === subBreed.subBreed);
  };

  const addToFavorites = (subBreedWithImages) => {
    const updatedFavorites = [...favorites, subBreedWithImages];
    setFavorites(updatedFavorites);
    storeData(updatedFavorites, 'favorites');
  };

  const removeFromFavorites = (subBreed) => {
    const updatedFavorites = favorites.filter((fav) => fav.name !== subBreed.name);
    setFavorites(updatedFavorites);
    storeData(updatedFavorites, 'favorites');
  };

  return {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  };
}

export default useFavorites;
