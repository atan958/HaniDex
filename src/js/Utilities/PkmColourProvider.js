
/*
/
*/
const providePkmTypeColour = (types) => {
    const mainType = types[0];
    let pkmTypeColour = '';
    
    switch(mainType) {
        case 'normal':
            pkmTypeColour = '#C6C6A7'
            break;
        case 'fire':
            pkmTypeColour = '#F5AC78'
            break;
        case 'water':
            pkmTypeColour = '#9DB7F5'
            break;
        case 'grass':
            pkmTypeColour = '#A7DB8D'
            break;
        case 'electric':
            pkmTypeColour = '#FAE078'
            break;
        case 'ice':
            pkmTypeColour = '#BCE6E6'
            break;
        case 'fighting':
            pkmTypeColour = '#D67873'
            break;
        case 'poison':
            pkmTypeColour = '#C183C1'
            break;
        case 'ground':
            pkmTypeColour = '#EBD69D'
            break;
        case 'flying':
            pkmTypeColour = '#C6B7F5'
            break;
        case 'psychic':
            pkmTypeColour = '#FA92B2'
            break;
        case 'bug':
            pkmTypeColour = '#C6D16E'
            break;
        case 'rock':
            pkmTypeColour = '#D1C17D'
            break;
        case 'ghost':
            pkmTypeColour = '#A292BC'
            break;
        case 'dark':
            pkmTypeColour = '#A29288'
            break;
        case 'dragon':
            pkmTypeColour = '#A27DFA'
            break;
        case 'steel':
            pkmTypeColour = '#D1D1E0'
            break;
        case 'fairy':
            pkmTypeColour = '#F4BDC9'
            break;
    }
    return pkmTypeColour;
}

export { providePkmTypeColour }
