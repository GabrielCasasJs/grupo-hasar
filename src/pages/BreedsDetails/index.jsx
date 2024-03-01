import {
  useParams,
  useNavigate,
} from 'react-router-dom';

import { MdFavorite } from "react-icons/md";

import { FcHome } from "react-icons/fc";

import useGetDogDetails from '../../hooks/UseGetDogDetails';
import useFavorites from '../../hooks/UseFavorites';

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import SubBreedDetails from './components/SubBreedDetails';

function BreedsDetails() {
  const navigate = useNavigate();

  const { breed } = useParams();

  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  const { details, loading, error } = useGetDogDetails(breed);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los detalles.</p>;
  }

  return (
    <Screen className="h-dvh">
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => navigate('/home')}>
          <FcHome size={40} />
        </button>

        <button
          type="button"
          onClick={() => navigate('/favorite-breends')}
          className="flex items-center border rounded-lg p-2"
        >
          <p
            className="pr-4 text-gray-100"
          >
            Favoritos
          </p>
          <MdFavorite color="#fff" size={34} />
        </button>
      </div>
      <Text
        customSize="30px"
        weight="bold"
        color="white"
        underline
        styles={{ fontFamily: 'sans-serif' }}
      >
        {`Detalle de la Raza - ${capitalizeFirstLetter(breed)}`}
      </Text>

      <hr style={{ marginTop: 40 }} />

      <Text
        color="white"
        weight="bold"
        customSize={30}
        styles={{ marginTop: 40 }}
      >
        {details.length > 0 ? 'SUB RAZAS' : 'NO HAY SUB RAZAS!'}
      </Text>

      {details.length > 0 ? (
        <ul className="flex w-full flex-wrap mt-4 justify-between">
          {details && details?.length > 0 && details?.map((subBreedWithImages) => (
            <SubBreedDetails
              key={subBreedWithImages.subBreed}
              subBreedWithImages={subBreedWithImages}
              onFavoriteClick={(subBreed) => {
                if (favorites.includes(subBreed)) {
                  removeFromFavorites(subBreed);
                } else {
                  addToFavorites(subBreed);
                }
              }}
            />
          ))}
        </ul>
      ) : (
        <Text> Sin sub raza </Text>
      )}
    </Screen>
  );
}

export default BreedsDetails;
