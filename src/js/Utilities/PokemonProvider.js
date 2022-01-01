import axios from 'axios'

import { providePkmPng } from './PkmGraphicsProvider'

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

/*
/ A service for providing Pokemon data to the application
*/
const providePokemonData = async () => {
    const defaultSelect = false;

    let pkmData = await axios.get(pokeApiUrl);
    let pkmNames = pkmData.data.results.map((pkm) => pkm.name);

    for (let i=0; i<55; i++) {
        let pokeApiNextUrl = pkmData.data.next;
        pkmData = await axios.get(pokeApiNextUrl);
        pkmNames = pkmNames.concat(pkmData.data.results.map((pkm) => pkm.name));
    }
    
    return (pkmNames.map((pkmName) => {
        let pkmPng = providePkmPng(pkmName);
        return { 
            name: pkmName, 
            png: pkmPng,
            selected: defaultSelect };
    }));
}

export { providePokemonData }
