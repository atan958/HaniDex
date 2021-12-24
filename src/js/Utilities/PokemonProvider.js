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
        'mew', 
        'mewtwo',
    ];

    return (pkmList.map((pkmName) => {
        return { name: pkmName };
    }));
}

export default PokemonProvider
