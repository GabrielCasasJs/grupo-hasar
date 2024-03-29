import Text from '../Text';

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

import './styles.css';

function Card({
    breed,
    breedCount,
    onClick = () => {},
}) {

    return (
        <button onClick={onClick} className="container-card flex items-center justify-between bg-gray-700 my-4 p-3 rounded-md w-full">
            <Text
                weight="bold"
                color="white"
            >
                {capitalizeFirstLetter(breed)}
            </Text>
            <div className="flex items-center justify-center">
                <Text
                    color="white"
                    size="small"
                    styles={{ paddingRight: 8 }}
                >
                    Cantidad de Sub-Razas
                </Text>
                <div
                    style={{
                        backgroundColor: '#557ccc',
                        borderRadius: 50,
                        width: 20,
                        height: 20,
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <Text
                        size="small"
                        color="white"
                        styles={{ marginTop: 1.3, marginRight: 0.2 }}
                    >
                        {breedCount}
                    </Text>
                </div>
            </div>
        </button>
    )
}

export default Card;
