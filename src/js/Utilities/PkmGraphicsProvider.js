/*
/ A service for providing png files of the Pokemon from pokemon-assets
*/
const providePkmPng = (pkmName) => {
    let spriteReg, spriteShiny;

    try {
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${pkmName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${pkmName}.png`);
    }
    catch(e) {
        [spriteReg, spriteShiny] = applyPkmPngFixes(pkmName);
    }

    return {
        sprite: {
            reg: spriteReg,
            shiny: spriteShiny
        }
    };
}

export { providePkmPng }

const applyPkmPngFixes = (pkmName) => {
    let spriteReg, spriteShiny;

    /*
    / Sets the default sprite png's to the missingno png
    */
    spriteReg = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);
    spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);
        
    /*
    / Fix for gendered Pokemon (Note: Works for both genders)
    */
    if(pkmName.slice(pkmName.length-4, pkmName.length) === 'male') {
        let fixedName = pkmName.slice(0, pkmName.length-5);

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${fixedName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${fixedName}.png`);
    }

    /*
    / Fix for Deoxys forms
    */
    if(pkmName === 'deoxys-normal') {
        let defaultName = 'deoxys';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Wormadam forms
    */
    if(pkmName === 'wormadam-plant') {
        let defaultName = 'wormadam';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Giratina forms
    */
    if(pkmName === 'giratina-altered') {
        let defaultName = 'giratina';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Shaymin forms
    */
    if(pkmName === 'shaymin-land') {
        let defaultName = 'shaymin';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Basculin forms
    */
    if(pkmName === 'basculin-red-striped') {
        let defaultName = 'basculin';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
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

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Incarnate Trio forms
    */
    if(pkmName.includes('incarnate')) {
        let defaultName = pkmName.slice(0, pkmName.length - '-incarnate'.length);

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Keldeo forms
    */
    if(pkmName === 'keldeo-ordinary') {
        let defaultName = 'keldeo';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Zygarde forms
    */
    if(pkmName === 'zygarde-50') {
        let defaultName = 'zygarde';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Meloetta forms
    */
    if(pkmName === 'meloetta-aria') {
        let defaultName = 'meloetta';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Minior forms
    */
    if(pkmName.includes('minior') && pkmName.includes('meteor')) {
        let defaultName = 'minior';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Gourgeist forms
    */
    if(pkmName === 'gourgeist-average') {
        let defaultName = 'gourgeist';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Pumpkaboo forms
    */
    if(pkmName === 'pumpkaboo-average') {
        let defaultName = 'pumpkaboo';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Aegislash forms
    */
    if(pkmName === 'aegislash-shield') {
        let defaultName = 'aegislash';
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Mimikyu forms
    */
    if(pkmName === 'mimikyu-disguised') {
        let defaultName = 'mimikyu';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Mimikyu forms
    */
    if(pkmName === 'greninja-battle-bond') {
        let defaultName = 'unknown-pokemon';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Oricorio forms
    */
    if(pkmName === 'oricorio-baile') {
        let defaultName = 'oricorio';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Lycanroc forms
    */
    if(pkmName === 'lycanroc-midday') {
        let defaultName = 'lycanroc';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Wishiwashi forms
    */
    if(pkmName === 'wishiwashi-solo') {
        let defaultName = 'wishiwashi';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }
    
    /*
    / Fix for Toxtricity forms
    */
    if(pkmName.includes('toxtricity-amped')) {
        let defaultName = 'toxtricity';
        let gmax = '-gmax';
        if(pkmName.includes(gmax)) { defaultName += gmax }

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Eiscue forms
    */
    if(pkmName.includes('eiscue-ice')) {
        let defaultName = 'eiscue';

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }
    
    /*
    / Fix for Urshifu forms
    */
    if(pkmName.includes('urshifu')) {
        let defaultName = 'urshifu';
        let gmax = '-gmax'
        if(pkmName.includes(gmax)) { defaultName += gmax }

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Z-hero forms
    */
    if(pkmName.includes('-hero')) {
        let defaultName = pkmName.slice(0, pkmName.length - '-hero'.length);
        
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Alolan Totem forms
    */
    if(pkmName.includes('totem')) {
        let defaultName = 'unknown-pokemon';
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }
    
    /*
    / Fix for Rockruff forms
    */
    if(pkmName.includes('-own-tempo')) {
        let defaultName = 'unknown-pokemon'
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Necrozma forms
    */
    if(pkmName.includes('necrozma')) {
        let defaultName = 'necrozma';
        let duskForm = ['dusk','mane'];
        let dawnForm = ['dawn', 'wings'];

        if(pkmName.includes(duskForm[0])) { defaultName = [defaultName, ...duskForm].join('-') }
        if(pkmName.includes(dawnForm[0])) { defaultName = [defaultName, ...dawnForm].join('-') }

        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }

    /*
    / Fix for Calyrex forms
    */
    if(pkmName.includes('-rider')) {
        let defaultName = pkmName.slice(0, pkmName.length - '-rider'.length);
        spriteReg = require(`../../pokemon-assets/assets/img/pokemon/${defaultName}.png`);
        spriteShiny = require(`../../pokemon-assets/assets/img/pokemon/shiny/${defaultName}.png`);
    }
    return [spriteReg, spriteShiny];
}