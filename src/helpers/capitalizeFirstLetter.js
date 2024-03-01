
function capitalizeFirstLetter(breed) {
    const breedWithCapital = breed.charAt(0).toUpperCase() + breed.slice(1);
    return breedWithCapital;
}

export { capitalizeFirstLetter };