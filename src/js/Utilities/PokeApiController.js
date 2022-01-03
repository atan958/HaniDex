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
    let pokeApiData = (await axios.get(pokeApiUrl)).data;
    let filteredData = await getFilteredData(pokeApiData);

    for (let i=0; i<44; i++) {
        let pokeApiNextUrl = pokeApiData.next;
        pokeApiData = (await axios.get(pokeApiNextUrl)).data;
        filteredData = filteredData.concat(await getFilteredData(pokeApiData));
    }
    return filteredData;
}

/*
/ Helper Method: Returns an array of Pokemon objects which contain the necessary data from PokeApi
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData = async (pokeApiData) => {
    let filteredData = await Promise.all(pokeApiData.results.map(async (pkmSpc) => {
        let pkmSpcData = (await axios.get(pkmSpc.url)).data;

        const name = pkmSpc.name;
        const id = pkmSpcData.id;
        const descDefault = pkmSpcData.flavor_text_entries.filter((entry) => {
            return entry.language.name === "en";
        })[0].flavor_text;

        return {
            name: name,
            id: id,
            desc: {
                default: descDefault
            }
        };
    }));

    return filteredData;
}

export { retrievePokeApiData }

