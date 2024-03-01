import { useNavigate } from 'react-router-dom';

import UseGetGods from "../../hooks/UseGetDogs";
import Screen from '../../components/Screen';
import Card from "../../components/Card";

function Home() {
  const { dogs } = UseGetGods();

  const navigate = useNavigate();

  if (!dogs || !dogs.message) {
    return <p>Cargando...</p>
  }

  const handleClick = (breed) => {
    navigate(`/sub-breeds/${breed}`);
  };

  return (
    <Screen safe>
      <h2 className="text-3xl ml-4 pb-8 underline text-white font-bold" style={{ fontFamily: 'sans-serif' }}>
        Razas de Perros
      </h2>
      <ul className="flex flex-wrap justify-center lg:justify-between">
        {Object.keys(dogs.message).map(breed => (
          <li key={breed} className="w-80 md:w-80 md:mx-4 lg:w-96">
            <Card
              key={breed}
              breed={breed}
              onClick={() => handleClick(breed)}
              breedCount={dogs.message[breed].length}
            />
          </li>
        ))}
      </ul>
    </Screen>
  );
}

export default Home;
