import { useNavigate } from 'react-router-dom';

import { MdFavorite } from "react-icons/md";

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
      <div className="flex items-center justify-between">
        <h2
          className="text-lg lg:text-3xl ml-4 pb-8 underline text-white font-bold"
          style={{ fontFamily: 'sans-serif' }}
        >
          Razas de Perros
        </h2>
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
      <ul className="flex mt-10 flex-wrap justify-center lg:justify-between">
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
