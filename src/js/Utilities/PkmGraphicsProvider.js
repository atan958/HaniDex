/*
/ A service for providing png files of the Pokemon from pokemon-assets
*/
const providePkmPng = (pkmName) => {
    let pkmPng, pkmImg;
    try {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${pkmName}.png`);
    }
    catch(e) {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);
    }
    return pkmPng;
}

export { providePkmPng }