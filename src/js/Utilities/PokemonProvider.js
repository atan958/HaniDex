function PokemonProvider() {
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
        'raikoiu'
    ];

    return (pkmList.map((pkmName) => {
        return { name: pkmName };
    }));
}

export default PokemonProvider
