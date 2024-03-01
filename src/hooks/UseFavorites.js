
import { useContext } from 'react';

import AuthContext from '../context/AuthContext';

import { storeData } from '../helpers/storageData';

function useFavorites() {
  const {
    favorites,
    setFavorites,
} = useContext(AuthContext);

  const addToFavorites = (breed) => {
    const updatedFavorites = [...favorites, breed];
    setFavorites(updatedFavorites);
    storeData(updatedFavorites, 'favorites');
  };

  const removeFromFavorites = (breed) => {
    const updatedFavorites = favorites.filter((fav) => fav !== breed);
    setFavorites(updatedFavorites);
    storeData(updatedFavorites, 'favorites');
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
}

export default useFavorites;
