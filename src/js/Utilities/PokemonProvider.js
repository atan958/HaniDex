import axios from 'axios'

import { providePkmPng } from './PkmGraphicsProvider'

const pkmList= [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander', 
    'charmeleon',
    'charizard',
    'squirtle', 
    'wartortle',
    'blastoise',
    'pichu',
    'pikachu',
    'raichu',
    'geodude',
    'graveler',
    'golem',
    'abra',
    'kadabra',
    'alakazam',
    'gastly',
    'haunter', 
    'gengar',
    'zapdos',
    'moltres',
    'articuno',
    'raikou',
    'entei',
    'suicune',
    'mew', 
    'mewtwo',
    'raikoiu',
    'aerodactyl',
    'onix',
    'steelix',
    'torchic',
    'combusken',
    'blaziken',
    'treecko',
    'grovyle',
    'sceptile',
    'mudkip',
    'marshtomp',
    'swampert'
];

/*
/ A service for providing Pokemon data to the application
*/
const providePokemonData1 = () => {
    const defaultSelect = false;
    
    //Note: Should toLowerCase() either from here or where you're using the name

    return (pkmList.map((pkmName) => {
        let pkmPng = providePkmPng(pkmName);
        return { 
            name: pkmName, 
            png: pkmPng,
            selected: defaultSelect };
    }));
}

/*
    let pkmData = await axios.get();
    let pkmNames = pkmData.data.results.map((pkm) => pkm.name);
    pkmData = await axios.get(pkmData.data.next);
    pkmNames = pkmNames.concat(pkmData.data.results.map(pkm=> pkm.name));
*/

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';
const defaultSelect = false;

const providePokemonData = async () => {
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
