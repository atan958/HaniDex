import axios from 'axios'

/*
/ The URL for the PokeApi pokemon-species endpoint
*/
const pokeApiUrl_pkmSpc = 'https://pokeapi.co/api/v2/pokemon-species';
/*
/ The URL for the PokeApi pokemon endpoint
*/
const pokeApiUrl_pkm = 'https://pokeapi.co/api/v2/pokemon';

/*
/ A service for retrieving Pokemon data from the public API PokeApi 
/
/ Note: Total number of retrievable Pokemon is 1118
*/
const retrievePokeApiData = async () => {
    let pokeApiData = (await axios.get(pokeApiUrl_pkmSpc)).data;
    let filteredData = await getFilteredData(pokeApiData);

    for (let i=0; i<44; i++) {
        let pokeApiNextUrl = pokeApiData.next;
        pokeApiData = (await axios.get(pokeApiNextUrl)).data;
        filteredData = filteredData.concat((await getFilteredData(pokeApiData)));
    }
    return filteredData;
}

/*
/ Helper Method: Returns an array of Pokemon objects which contain the necessary data from PokeApi
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData = async (pokeApiData) => {
    const filteredData = await Promise.all(pokeApiData.results.map(async (pkmSpc) => {

        const pkmId = pkmSpc.url.slice('https://pokeapi.co/api/v2/pokemon-species/'.length, pkmSpc.url.length-1)
        const pkmUrl = `${pokeApiUrl_pkm}/${pkmId}`;
        
        /*
        / 
        */
        const [pkmSpcRes, pkmRes] = await Promise.all([axios.get(pkmSpc.url), axios.get(pkmUrl)]);

        /*
        / 
        */
        const pkmSpcData = pkmSpcRes.data;
        const pkmData = pkmRes.data;

        /*
        / 
        */
        const name = pkmSpc.name;
        const id = pkmSpcData.id;
        const descDefault = pkmSpcData.flavor_text_entries.filter((entry) => {
            return entry.language.name === "en";
        })[0].flavor_text;
        const types = pkmData.types.map((typeObj) => {
            return typeObj.type.name
        });

        return {
            name: name,
            id: id,
            types: types,
            desc: {
                default: descDefault
            }
        };;
    }));
    return filteredData;
}

/*
/ Helper Method: Returns an array of Pokemon objects which contain the necessary data from PokeApi
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData1 = async (pokeApiData) => {
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

