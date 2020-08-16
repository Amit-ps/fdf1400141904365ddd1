
export const fetchAsteroidDetailsUsingId = async(id) => {
    try {
        const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=UrnvFg8IzJqGiJFD8UnpWnnTay7o4y4OfemXCthk`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error("Cannot fetch asteroid details using id");

    }
}

export const fetchRamdomIds = async() => {
    try {
        let list = [];
        const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=UrnvFg8IzJqGiJFD8UnpWnnTay7o4y4OfemXCthk");
        const data = await response.json();
        return data.near_earth_objects;
    } catch (error) {
        throw error("Cannot fetch the random ID's")
    }
}