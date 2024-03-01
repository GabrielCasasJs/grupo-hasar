import axiosInstance from "./index";

async function getDogs() {
    try {
        const response = await axiosInstance.get('/breeds/list/all');
        if (response) {
            return response.data;
        }
    } catch (err) {
        console.info('Err getDogs :', err);
        throw err;
    }
}

async function getSubBreeds(breed) {
    try {
        const response = await axiosInstance.get(`/breed/${breed}/list`);
        if (response) {
            return response.data;
        }
    } catch (err) {
        console.info(`Err getSubBreeds for ${breed}:`, err);
        throw err;
    }
}

async function getBreedImages(breed) {
    try {
        const response = await axiosInstance.get(`/breed/${breed}/images`);
        if (response) {
            return response.data;
        }
    } catch (err) {
        console.error(`Error getBreedImages for ${breed}:`, err);
        throw err;
    }
}

async function getSubBreedImages(breed, subBreed = '') {
    const url = subBreed
        ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/1`
        : `https://dog.ceo/api/breed/${breed}/images/random/1`;

    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error(`Err getSubBreedImages for ${subBreed} of ${breed}:`, error);
        throw error;
    }
}

export {
    getDogs,
    getSubBreeds,
    getBreedImages,
    getSubBreedImages,
}