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
        / Fix for Deoxys forms
        */
        if(pkmName == 'deoxys-normal') {
            let defaultName = 'deoxys';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Wormadam forms
        */
        if(pkmName == 'wormadam-plant') {
            let defaultName = 'wormadam';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Giratina forms
        */
        if(pkmName == 'giratina-altered') {
            let defaultName = 'giratina';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Shaymin forms
        */
        if(pkmName == 'shaymin-land') {
            let defaultName = 'shaymin';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Basculin forms
        */
        if(pkmName == 'basculin-red-striped') {
            let defaultName = 'basculin';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Darmanitan forms
        */
        if(pkmName.includes('darmanitan')) {
            let defaultName = 'darmanitan';
            if (pkmName.includes('galar')) {
                defaultName += '-galar';
                if(!pkmName.includes('standard')) {
                    defaultName += pkmName.slice(defaultName.length-6, pkmName.length-6);
                }
            }
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Incarnate Trio forms
        */
        if(pkmName.includes('incarnate')) {
            let defaultName = pkmName.slice(0, pkmName.length - '-incarnate'.length);
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
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