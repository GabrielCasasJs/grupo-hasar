import { MdFavorite } from "react-icons/md";

import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';
import Text from '../../../../components/Text';

function SubBreedDetails({
    subBreedWithImages,
    handleFavoriteClick,
    isFavorite,
    isFavoriteActive = false,
}) {

    return (
        <li className="mr-6 my-6 relative" key={subBreedWithImages?.subBreed}>
            <Text color="white" customSize={20} styles={{ paddingBottom: 12 }}>
                {capitalizeFirstLetter(subBreedWithImages.subBreed)}
            </Text>
            {subBreedWithImages.images && (
                <ul>
                    {subBreedWithImages.images.map((image) => (
                        <li key={image}>
                            <img
                                src={image}
                                alt={`${subBreedWithImages.subBreed}${image}`}
                                className="w-64 h-64 object-cover rounded-md"
                            />
                        </li>
                    ))}
                </ul>
            )}
            {isFavoriteActive && (
                <button
                    type="button"
                    onClick={handleFavoriteClick}
                    className="absolute right-3 bottom-3"
                    style={{
                        border: '1px solid',
                        borderRadius: 8,
                        color: isFavorite() ? 'red' : 'white',
                    }}
                >
                    <MdFavorite size={34} />
                </button>
            )}
        </li>
    );
}

export default SubBreedDetails;