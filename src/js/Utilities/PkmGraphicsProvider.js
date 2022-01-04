/*
/ A service for providing png files for a given Pokemon
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

const provideMiscPng = (misc) => {
    let miscPng;
    
    switch(misc) {
        case 'mega-stone':
            miscPng = 'https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/symbols/form-mega2.png';
            break;
        case 'shiny-sym':
            miscPng = require('../../angelo-assets/shiny-sym.png');
            break;
        default:
            miscPng = '../../angelo-assets/missingno.png';
    }

    return miscPng;
}

/*
/ Provides the PNGs of the types of a given Pokemon
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

const getPkmTypePng = (pkmType) => {
    return `https://raw.githubusercontent.com/itsjavi/pokemon-assets/master/assets/img/symbols/type-${pkmType}-badge-32px.png`;
}

export { providePkmPng, provideMiscPng, providePkmTypesPng }