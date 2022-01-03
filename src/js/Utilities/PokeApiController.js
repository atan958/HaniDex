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
/ Note: Total number of retrievable Pokemon species is 898
*/
const retrievePokeApiData = async () => {
    let pokeApiData_pkmSpc = (await axios.get(pokeApiUrl_pkmSpc)).data;
    let filteredData = await getFilteredData(pokeApiData_pkmSpc);

    const maxEntriesPerCall = 20;
    console.log('STARTING: ' + new Date().getTime());
    for (let i=0; i<(pokeApiData_pkmSpc.count/maxEntriesPerCall)-1; i++) {
        let pokeApiNextUrl = pokeApiData_pkmSpc.next;
        pokeApiData_pkmSpc = (await axios.get(pokeApiNextUrl)).data;
        filteredData = filteredData.concat((await getFilteredData(pokeApiData_pkmSpc)));
    }
    console.log('ENDING: ' + new Date().getTime());
    console.log(filteredData);
    return filteredData;
}

/*
/ Helper Method: Returns an array of Pokemon objects which contain the necessary data from PokeApi
/
/ Each object contains the respective pokemon's name, number, description, stats, etc.
*/
const getFilteredData = async (pokeApiData_pkmSpc) => {
    /*
    / Acquires necessary data for each and all Pokemon in the list concurrently
    */
    const filteredData = await Promise.all(pokeApiData_pkmSpc.results.map(async (pkmSpc) => {

        /*
        / Obtains a Pokemon's pokedex id from the Pokemon Species' url property
        */
        const pkmId = pkmSpc.url.slice('https://pokeapi.co/api/v2/pokemon-species/'.length, pkmSpc.url.length-1)
        const pkmUrl = `${pokeApiUrl_pkm}/${pkmId}`;
        
        /*
        / Performs concurrent get requests from the "Pokemon Species" and "Pokemon" endpoint respectively
        */
        const [pkmSpcRes, pkmRes] = await Promise.all([axios.get(pkmSpc.url), axios.get(pkmUrl)]);

        /*
        / Stores the bodies of the previously obtained responses
        */
        const pkmSpcData = pkmSpcRes.data;
        const pkmData = pkmRes.data;

        /*
        / Declares the to-be values of the output object's properties
        */
        const name = pkmSpc.name;
        const id = pkmSpcData.id;

        const descDefault = pkmSpcData.flavor_text_entries.filter((entry) => {
            return entry.language.name === "en";
        })[0].flavor_text;

        const types = pkmData.types.map((typeObj) => {
            return typeObj.type.name
        });

        const stats = pkmData.stats.map((stat) => {
            return {
                name: stat.stat.name,
                value: stat.base_stat
            }
        });
        if(name=="bulbasaur") {
            console.log(stats)
        }

        return ({
            name: name,
            id: id,
            types: types,
            stats: stats,
            desc: {
                default: descDefault
            }
        });
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

