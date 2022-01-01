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
        const pkmPng = providePkmPng(pkmData.name);
        const pkmGender = providePkmGender(pkmData.name);

        return { 
            name: {
                default: pkmData.name
            }, 
            gender: pkmGender,
            png: pkmPng,
            selected: defaultSelect };
    }));
}

export { providePkmData }
