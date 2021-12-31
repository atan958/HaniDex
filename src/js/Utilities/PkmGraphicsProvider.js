/*
/ A service for providing png files of the Pokemon from pokemon-assets
*/
const providePkmPng = (pkmName) => {
    let pkmPng;
    try {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${pkmName}.png`);
    }
    catch(e) {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);

        /*
        / Deoxys-normal is non-existant in pokemon-assets img folder
        */
        if(pkmName == 'deoxys-normal') {
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/deoxys.png`);
        }

        /*
        / Gets the correct png for gendered Pokemon (Note: Works for both genders)
        */
        if(pkmName.slice(pkmName.length-4, pkmName.length) == 'male') {
            let genderedPkmName = pkmName.slice(0, pkmName.length-5);
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${genderedPkmName}.png`);
        }
    }
    return pkmPng;
}

export { providePkmPng }