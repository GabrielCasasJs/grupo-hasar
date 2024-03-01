import { MdFavorite } from "react-icons/md";

import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';

import Text from '../../../../components/Text';

function SubBreedDetails({
    subBreedWithImages,
    onFavoriteClick = () => {},
}) {
    return (
        <li
            className="mr-6 my-6 relative"
            key={subBreedWithImages?.subBreed}
        >
            <Text
                color="white"
                customSize={20}
                styles={{ paddingBottom: 12 }}
            >
                {capitalizeFirstLetter(subBreedWithImages.subBreed)}
            </Text>
            {subBreedWithImages.images && (
                <ul>
                    {subBreedWithImages.images.map((image) => (
                        <li key={image}>
                            <img
                                src={image}
                                alt={`${subBreedWithImages.subBreed}${image}`}
                                className="w-72 h-72 object-cover rounded-md"
                            />
                        </li>
                    ))}
                </ul>
            )}
            <button
                type="button"
                onClick={onFavoriteClick}
                className="absolute right-3 bottom-3"
            >
                <MdFavorite color="#fff" size={34} />
            </button>
        </li>
    );
}

export default SubBreedDetails;
