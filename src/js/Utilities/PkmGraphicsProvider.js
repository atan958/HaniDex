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
        / Fix for gendered Pokemon (Note: Works for both genders)
        */
        if(pkmName.slice(pkmName.length-4, pkmName.length) === 'male') {
            let genderedPkmName = pkmName.slice(0, pkmName.length-5);
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${genderedPkmName}.png`);
        }

        /*
        / Fix for Deoxys forms
        */
        if(pkmName === 'deoxys-normal') {
            let defaultName = 'deoxys';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Wormadam forms
        */
        if(pkmName === 'wormadam-plant') {
            let defaultName = 'wormadam';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Giratina forms
        */
        if(pkmName === 'giratina-altered') {
            let defaultName = 'giratina';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Shaymin forms
        */
        if(pkmName === 'shaymin-land') {
            let defaultName = 'shaymin';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Basculin forms
        */
        if(pkmName === 'basculin-red-striped') {
            let defaultName = 'basculin';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Darmanitan forms => Note: Over-complicated
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
        / Fix for Keldeo forms
        */
        if(pkmName === 'keldeo-ordinary') {
            let defaultName = 'keldeo';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Zygarde forms
        */
        if(pkmName === 'zygarde-50') {
            let defaultName = 'zygarde';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Meloetta forms
        */
        if(pkmName === 'meloetta-aria') {
            let defaultName = 'meloetta';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Minior forms
        */
        if(pkmName.includes('minior') && pkmName.includes('meteor')) {
            let defaultName = 'minior';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Gourgeist forms
        */
        if(pkmName === 'gourgeist-average') {
            let defaultName = 'gourgeist';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Pumpkaboo forms
        */
        if(pkmName === 'pumpkaboo-average') {
            let defaultName = 'pumpkaboo';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Aegislash forms
        */
        if(pkmName === 'aegislash-shield') {
            let defaultName = 'aegislash';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Mimikyu forms
        */
        if(pkmName === 'mimikyu-disguised') {
            let defaultName = 'mimikyu';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Mimikyu forms
        */
        if(pkmName === 'greninja-battle-bond') {
            let defaultName = 'greninja-ash';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Oricorio forms
        */
        if(pkmName === 'oricorio-baile') {
            let defaultName = 'oricorio';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Lycanroc forms
        */
        if(pkmName === 'lycanroc-midday') {
            let defaultName = 'lycanroc';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Wishiwashi forms
        */
        if(pkmName === 'wishiwashi-solo') {
            let defaultName = 'wishiwashi';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }
        
        /*
        / Fix for Toxtricity forms
        */
        if(pkmName.includes('toxtricity-amped')) {
            let defaultName = 'toxtricity';
            let gmax = '-gmax';
            if(pkmName.includes(gmax)) { defaultName += gmax }
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Eiscue forms
        */
        if(pkmName.includes('eiscue-ice')) {
            let defaultName = 'eiscue';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }
        
        /*
        / Fix for Urshifu forms
        */
        if(pkmName.includes('urshifu')) {
            let defaultName = 'urshifu';
            let gmax = '-gmax'
            if(pkmName.includes(gmax)) { defaultName += gmax }
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Z-hero forms
        */
        if(pkmName.includes('-hero')) {
            let defaultName = pkmName.slice(0, pkmName.length - '-hero'.length);
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }

        /*
        / Fix for Z-hero forms
        */
        if(pkmName.includes('totem')) {
            let defaultName = 'unknown-pokemon';
            pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        }
    
    }
    return pkmPng;
}

export { providePkmPng }