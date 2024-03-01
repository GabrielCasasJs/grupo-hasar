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

export {
    getDogs,
    getSubBreeds
}