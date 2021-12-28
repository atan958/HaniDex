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
    'aerodactyl'
];

function providePokemonData() {
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

export { providePokemonData }
