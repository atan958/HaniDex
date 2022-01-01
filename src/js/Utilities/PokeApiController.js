import axios from 'axios'

/*
/ The URL for PokeApi
*/
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

/*
/ A service for retrieving Pokemon data from the public API PokeApi 
*/
const retrievePokeApiData = async () => {
    let pokeApiData = await axios.get(pokeApiUrl);
    let filteredData = getFilteredData(pokeApiData);
    // let pkmNames = pokeApiData.data.results.map((pkm) => pkm.name);

    for (let i=0; i<55; i++) {
        let pokeApiNextUrl = pokeApiData.data.next;
        pokeApiData = await axios.get(pokeApiNextUrl);
        filteredData = filteredData.concat(getFilteredData(pokeApiData));
        // pkmNames = pkmNames.concat(pokeApiData.data.results.map((pkm) => pkm.name));
    }
    return filteredData;
}

/*
/ Returns an array of Pokemon objects which contain the necessary data for the app from the API
*/
const getFilteredData = (pokeApiData) => {
    // Return an array of pokemon objects
    // Each object contains the respective pokemon's name, number, description, stats, etc.
    return pokeApiData.data.results.map((pkm) => {
        return {
            name: pkm.name
        };
    });
}

export { retrievePokeApiData }

