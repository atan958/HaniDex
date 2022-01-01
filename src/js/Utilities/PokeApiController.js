import axios from 'axios'

/*
/ The URL for PokeApi
*/
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

/*
/ A service for retrieving Pokemon data from the PokeApi public API
*/
const retrievePokeApiData = async () => {
    let pkmData = await axios.get(pokeApiUrl);
    let pkmNames = pkmData.data.results.map((pkm) => pkm.name);

    for (let i=0; i<55; i++) {
        let pokeApiNextUrl = pkmData.data.next;
        pkmData = await axios.get(pokeApiNextUrl);
        pkmNames = pkmNames.concat(pkmData.data.results.map((pkm) => pkm.name));
    }
    return pkmNames;
}

export { retrievePokeApiData }

