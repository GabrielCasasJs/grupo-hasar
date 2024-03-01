import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { MdFavorite } from 'react-icons/md';
import { FcHome } from 'react-icons/fc';

import UseFavorites from '../../hooks/UseFavorites';
import AuthContext from '../../context/AuthContext';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import Screen from '../../components/Screen';
import Text from '../../components/Text';

function FavoriteBreends() {
  const navigate = useNavigate();
  const { favorites } = useContext(AuthContext);
  const { isFavorite, removeFromFavorites } = UseFavorites();

  const handleFavoriteClick = (subBreed) => {
    if (isFavorite(subBreed)) {
      removeFromFavorites(subBreed);
    }
  };

  return (
    <Screen>
      <button type="button" onClick={() => navigate('/home')}>
        <FcHome size={40} />
      </button>
      <Text color="white" customSize={30} weight="bold">
        Listado de Favoritos
      </Text>
      <hr className="mt-6" />

      <div className="flex flex-wrap">
        {favorites?.length > 0 ?
          favorites.map((item) => (
            <div key={item?.subBreed} className="w-64 h-80 flex flex-col mt-6 relative">
              <Text customSize={24} color="white" styles={{ paddingBottom: 10 }}>
                {capitalizeFirstLetter(item?.subBreed)}
              </Text>
              <img
                src={item?.images[0]}
                alt={item?.subBreed}
                style={{
                  width: 220,
                  height: 220,
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
              />
              <button
                type="button"
                onClick={() => handleFavoriteClick(item)}
                className="absolute bottom-16 right-12"
                style={{ color: 'red' }}
              >
                <MdFavorite size={28} />
              </button>
            </div>
          )) : (
            <Text styles={{ paddingTop: 40 }} color="white" customSize={18}>
                Aun no hay favoritos guardados!
            </Text>
          )}
      </div>
    </Screen>
  );
}

export default FavoriteBreends;
