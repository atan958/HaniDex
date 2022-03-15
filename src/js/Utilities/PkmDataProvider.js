import { providePkmItemName } from './PkmDispNameProvider';
import { providePkmGender } from './PkmGenderProvider';
import { providePkmItemPng } from './PkmGraphicsProvider'
import { retrievePokeApiData } from './PokeApiController';

/*
/ Utility Method: A service for providing Pokemon data to the application
*/
const providePkmData = async () => {
    const defaultSelect = false;

    let pokeApiData = await retrievePokeApiData();
    
    return (pokeApiData.map((pkmData) => {
        const pkmItemName = providePkmItemName(pkmData.name);
        const id = pkmData.id;
        const types = pkmData.types;

        const stats = pkmData.stats;
        const gender = providePkmGender(pkmData.name);

        const png = providePkmItemPng(pkmData.name);
        const desc = pkmData.desc;
        const selected = defaultSelect;

        const height = pkmData.height;
        const weight = pkmData.weight;
        const captureRate = pkmData.captureRate;
        const genderRate = pkmData.genderRate;

        const eggGroups = pkmData.eggGroups;
        const hatchSteps = pkmData.hatchSteps;
        const abilities = pkmData.abilities;
        const evs = pkmData.evs;

        return { 
            name: {
                default: pkmData.name,
                pkmItem: pkmItemName,
            }, 
            id,
            types,

            stats,
            gender,

            png,
            desc,
            selected,

            height,
            weight,
            captureRate,
            genderRate,

            eggGroups,
            hatchSteps,
            abilities,
            evs
        };
    }));
}

export { providePkmData }
