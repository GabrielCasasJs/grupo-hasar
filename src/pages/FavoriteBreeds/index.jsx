import { useContext } from 'react';

import {
    useNavigate,
} from 'react-router-dom';

import { FcHome } from "react-icons/fc";

import AuthContext from '../../context/AuthContext';

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import Screen from '../../components/Screen';
import Text from '../../components/Text';

function FavoriteBreends() {
    const navigate = useNavigate();
    const { favorites } = useContext(AuthContext);

    return (
        <Screen>
            <button type="button" onClick={() => navigate('/home')}>
                <FcHome size={40} />
            </button>
            <Text
                color="white"
                customSize={30}
                weight="bold"
            >
                Listado de Favoritos
            </Text>
            <hr className="mt-6" />

            <div className="flex flex-wrap">
                {favorites && favorites.map((item) => (
                    <div
                        key={item?.subBreed}
                        className="w-80 h-80 flex flex-col mt-6"
                    >
                        <Text customSize={24} color="white" styles={{ paddingBottom: 10 }}>
                          {capitalizeFirstLetter(item?.subBreed)}
                        </Text>
                        <img
                            src={item?.images[0]}
                            alt={item?.subBreed}
                            style={{
                                width: 240,
                                height: 240,
                                objectFit: 'cover',
                                borderRadius: 10,
                            }}
                        />
                    </div>
                ))}
            </div>
        </Screen>
    )
}

export default FavoriteBreends;
