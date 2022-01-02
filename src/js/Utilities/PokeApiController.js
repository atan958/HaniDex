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
    let filteredData = await getFilteredData(pokeApiData);

    for (let i=0; i<44; i++) {
        let pokeApiNextUrl = pokeApiData.data.next;
        pokeApiData = await axios.get(pokeApiNextUrl);
        filteredData = filteredData.concat(await getFilteredData(pokeApiData));
    }
    return filteredData;
}

/*
/ Returns an array of Pokemon objects which contain the necessary data for the app from the API
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData1 = (pokeApiData) => {
    let filteredData = pokeApiData.data.results.map((pkmData) => {
        return {
            name: pkmData.name,
        };
    });
    return filteredData;
}

const getFilteredData = async (pokeApiData) => {
    let filteredData = await Promise.all(pokeApiData.data.results.map(async (pkmData) => {
        let pkmSpcData = (await axios.get(pkmData.url)).data;
        return {
            name: pkmData.name,
            id: pkmSpcData.id
        };
    }));

    return filteredData;
}

export { retrievePokeApiData }

