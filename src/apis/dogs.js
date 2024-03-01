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

async function getSubBreedImages(breed, subBreed, count = 1) {
    try {
        const response = await axiosInstance.get(`/breed/${breed}/${subBreed}/images/random/${count}`);
        if (response) {
            return response.data;
        }
    } catch (err) {
        console.info(`Err getSubBreedImages for ${subBreed} of ${breed}:`, err);
        throw err;
    }
}

export {
    getDogs,
    getSubBreeds,
    getBreedImages,
    getSubBreedImages,
}