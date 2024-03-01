import { useParams } from 'react-router-dom';

import UseGetDogDetails from "../../hooks/UseGetDogDetails";

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import Screen from '../../components/Screen';
import Text from '../../components/Text';
import SubBreedDetails from './components/SubBreedDetails';

function BreedsDetails() {
  const { breed } = useParams();
  const { details, loading, error } = UseGetDogDetails(breed);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los detalles.</p>;
  }

  return (
    <Screen>
      <Text
        customSize="30px"
        weight="bold"
        color="white"
        underline
        styles={{ fontFamily: 'sans-serif' }}
      >
        {`Detalle de la Raza - ${capitalizeFirstLetter(breed)}`}
      </Text>
      {details && (
        <ul className="flex w-full flex-wrap mt-10">
          {details && details?.length > 0 && details?.map((subBreedWithImages) => (
            <SubBreedDetails
                key={subBreedWithImages.subBreed}
                subBreedWithImages={subBreedWithImages}
            />
          ))}
        </ul>
      )}
    </Screen>
  );
}

export default BreedsDetails;
