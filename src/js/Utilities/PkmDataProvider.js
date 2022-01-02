import { providePkmItemName } from './PkmDispNameProvider';
import { providePkmGender } from './PkmGenderProvider';
import { providePkmPng } from './PkmGraphicsProvider'
import { retrievePokeApiData } from './PokeApiController';

/*
/ A service for providing Pokemon data to the application
*/
const providePkmData = async () => {
    const defaultSelect = false;

    let pokeApiData = await retrievePokeApiData();
    
    return (pokeApiData.map((pkmData) => {
        const pkmItemName = providePkmItemName(pkmData.name);
        const pkmGender = providePkmGender(pkmData.name);
        const pkmPng = providePkmPng(pkmData.name);

        return { 
            name: {
                default: pkmData.name,
                pkmItem: pkmItemName,
                pkmMember: null
            }, 
            id: pkmData.id,
            gender: pkmGender,
            png: pkmPng,
            desc: pkmData.desc,
            selected: defaultSelect
        };
    }));
}

export { providePkmData }
