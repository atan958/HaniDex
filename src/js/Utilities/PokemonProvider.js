import { providePkmPng } from './PkmGraphicsProvider'
import { retrievePokeApiData } from './PokeApiController';

/*
/ A service for providing Pokemon data to the application
*/
const providePokemonData = async () => {
    const defaultSelect = false;

    let pkmNames = await retrievePokeApiData();
    
    return (pkmNames.map((pkmName) => {
        const pkmPng = providePkmPng(pkmName);
        return { 
            name: pkmName, 
            png: pkmPng,
            selected: defaultSelect };
    }));
}

export { providePokemonData }
