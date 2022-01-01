import { provideItemDispName } from './PkmDispNameProvider';
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
        const pkmName = provideItemDispName(pkmData.name);
        const pkmGender = providePkmGender(pkmData.name);
        const pkmPng = providePkmPng(pkmData.name);

        return { 
            name: {
                default: pkmData.name,
                pkmItem: pkmName,
                pkmMember: null
            }, 
            gender: pkmGender,
            png: pkmPng,
            selected: defaultSelect };
    }));
}

export { providePkmData }
