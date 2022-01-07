/*
/ Utility Method: A service for providing the sprite png of a given Pokemon
*/
const providePkmPng = (pkmName) => {
    let spriteReg, spriteShiny = null;

    try {    
        /*
        / Uses the assets of an open-source GitHub repo to retrieve Pokemon image sprites from
        */
        spriteReg = `https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/pokemon/${pkmName}.png`;
        spriteShiny = `https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/pokemon/shiny/${pkmName}.png`;
    }
    catch(e) {
        /*
        / Defaults to the missingno png which is stored in the src folder => Throws a GET error which can't be caught??
        */
        spriteReg = require(`../../angelo-assets/missingno.png`);
        spriteShiny = require(`../../angelo-assets/missingno.png`);
    }

    return {
        sprite: {
            reg: spriteReg,
            shiny: spriteShiny
        }
    };
}

/*
/ Utility Method: A service for providing miscellaneous pngs to the components
*/
const provideMiscPng = (misc) => {
    let miscPng;
    
    switch(misc) {
        case 'mega-stone':
            miscPng = 'https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/symbols/form-mega2.png';
            break;
        case 'shiny-sym':
            miscPng = require('../../angelo-assets/shiny-sym.png');
            break;
        case 'whos-sym':
            miscPng = require('../../angelo-assets/whos-that-pkm-sym.png');
            break;
        default:
            miscPng = '../../angelo-assets/missingno.png';
    }
    
    return miscPng;
}

/*
/ Utility Method: A service which provides the pngs for Pokemon type symbols
*/
const providePkmTypesPng = (pkmTypes) => {
    const pkmTypesPng = [null, null];
    (pkmTypes.length==1)?
        pkmTypesPng[1] = getPkmTypePng(pkmTypes[0])
        :
        [pkmTypesPng[0],pkmTypesPng[1]] = pkmTypes.map((pkmType) => {
            return getPkmTypePng(pkmType);
        });
    return pkmTypesPng;
};

/*
/ Helper Method: Obtains the publically hosted png file of the Pokemon type symbols
*/
const getPkmTypePng = (pkmType) => {
    return `https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/symbols/type-${pkmType}-badge-32px.png`;
}

/*
/ Utility Method: A service which provides the sprite of a  random Pokemon
*/
const provideRandomPkmSprite = () => {
    return (
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getRandomPkmId()}.png`
    );
}

/*
/ Helper Method: Randomly generates a Pokedex id
*/
const getRandomPkmId = () => {
    const totalNumOfPkm = 898;

    return (
        Math.floor(Math.random() * totalNumOfPkm) + 1
    );
}

export { providePkmPng, provideMiscPng, providePkmTypesPng, provideRandomPkmSprite }