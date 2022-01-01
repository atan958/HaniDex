import axios from 'axios'

/*
/ The URL for PokeApi
*/
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon-species';

/*
/ A service for retrieving Pokemon data from the public API PokeApi 
/
/ Note: Total number of retrievable Pokemon is 1118
*/
const retrievePokeApiData = async () => {
    let pokeApiData = await axios.get(pokeApiUrl);
    let filteredData = getFilteredData(pokeApiData);

    for (let i=0; i<44; i++) {
        let pokeApiNextUrl = pokeApiData.data.next;
        pokeApiData = await axios.get(pokeApiNextUrl);
        filteredData = filteredData.concat(getFilteredData(pokeApiData));
    }
    return filteredData;
}

/*
/ Returns an array of Pokemon objects which contain the necessary data for the app from the API
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData = (pokeApiData) => {
    return pokeApiData.data.results.map((pkm) => {
        return {
            name: pkm.name
        };
    });
}

export { retrievePokeApiData }

