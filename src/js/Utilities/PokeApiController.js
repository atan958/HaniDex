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
/ Stores the number of API calls completed and still need to perform
*/
const numRuns = {
    current: 0,
    total: Number.MAX_VALUE
}

/*
/ A service for retrieving Pokemon data from the public API PokeApi 
/
/ Note: Total number of retrievable Pokemon species is 898
*/
const retrievePokeApiData = async () => {
    console.log('STARTING ' + new Date().getTime());
    let pokeApiData_pkmSpc = (await axios.get(pokeApiUrl_pkmSpc)).data;
    let filteredData = await getFilteredData(pokeApiData_pkmSpc);

    const maxEntriesPerCall = 20;

     numRuns.current++; 
     numRuns.total = Math.ceil(pokeApiData_pkmSpc.count/maxEntriesPerCall);
    
    for (let i=0; i<(pokeApiData_pkmSpc.count/maxEntriesPerCall)-1; i++) {
        let pokeApiNextUrl = pokeApiData_pkmSpc.next;
        pokeApiData_pkmSpc = (await axios.get(pokeApiNextUrl)).data;
        filteredData = filteredData.concat((await getFilteredData(pokeApiData_pkmSpc)));

        numRuns.current++;
    }
    console.log('FINISHED ' + new Date().getTime());
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

        const types = pkmData.types.map((typeObj) => {
            return typeObj.type.name
        });

        const stats = pkmData.stats.map((stat) => {
            return {
                name: stat.stat.name,
                value: stat.base_stat
            }
        });

        const descDefault = pkmSpcData.flavor_text_entries.filter((entry) => {
            return entry.language.name === "en";
        })[0].flavor_text;

        const height_m = Math.round(pkmData.height*10)/100;
        const weight_kg = Math.round(pkmData.weight/10);
        const capture_rate = pkmSpcData.capture_rate/255;
        const gender_rate = pkmSpcData.gender_rate/8;

        const egg_groups = pkmSpcData.egg_groups.map((grp) => {
            return (
                grp.name.charAt(0).toUpperCase() + grp.name.slice(1,grp.name.length)
            );
        });
        const hatch_steps = (pkmSpcData.hatch_counter + 1) * 255;
        const abilities = pkmData.abilities.map((ability) => {
            let ablName = ability.ability.name;
            return (
                ablName.charAt(0).toUpperCase() + ablName.slice(1,ablName.length)
            );
        });
        const evs = pkmData.stats.filter((stat) => {
            return (stat.effort > 0);
        }); 
        
        return ({
            name: name,
            id: id,
            types: types,
            stats: stats,
            desc: {
                default: descDefault
            },

            height: height_m,
            weight: weight_kg,
            captureRate: capture_rate,
            genderRate: gender_rate,

            eggGroups: egg_groups,
            hatchSteps: hatch_steps,
            abilities,
            evs
        });
    }));
    return filteredData;
}

export { retrievePokeApiData, numRuns }

