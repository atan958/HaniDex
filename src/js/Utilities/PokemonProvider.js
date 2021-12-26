import { providePkmImg } from './PkmImgProvider'

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
    'zapdos',
    'moltres',
    'articuno',
    'raikou',
    'entei',
    'suicune',
    'mew', 
    'mewtwo',
    'raikoiu',
];

function providePokemonData() {

    
    //Note: Should toLowerCase() either from here or where you're using the name

    return (pkmList.map((pkmName) => {
        let pkmImg = providePkmImg(pkmName);
        return { name: pkmName, img: pkmImg };
    }));
}

export { providePokemonData }
