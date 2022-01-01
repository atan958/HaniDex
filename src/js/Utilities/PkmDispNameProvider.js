const provideItemDispName = (pkmName) => {

    /*
    / Works for when Pokemon have only a single name
    */
    if(!pkmName.includes('-') || (!pkmName.includes('mr') && !pkmName.includes('jr') && !pkmName.includes('nidoran')) && !(pkmName==='type-null')) { return pkmName }

    /*
    / Applies the fixes needed for the display names of Pokemon
    */
    let itemDispName = pkmName;
    /*
    / Removes the -m or -f suffixes from Nidoran
    */
    if(itemDispName.includes('nidoran')) {
        return itemDispName.slice(0,itemDispName.length-2);
    }
    /*
    / Adds a dot at the end of Mr
    */
    if(itemDispName.includes('mr')) {
        let indexOfMr = pkmName.indexOf('mr');
        let letters = pkmName.split('');
        letters.splice(indexOfMr + 2, 0, '.');
        itemDispName = letters.join('');
    }
    /*
    / Adds a dot at the end of Jr
    */
    if(itemDispName.includes('jr')) {
        let indexOfJr = pkmName.indexOf('jr');
        let letters = pkmName.split('');
        letters.splice(indexOfJr + 2, 0, '.');
        itemDispName = letters.join('');
    }
    /*
    / Adds a colon after Type for the pokemon "Type: Null"
    */
    if(itemDispName ==='type-null') {
        let indexOfDash = pkmName.indexOf('-');
        let letters = pkmName.split('');
        letters.splice(indexOfDash, 0, ':');
        itemDispName = letters.join('');
    }
    /*
    / Replaces all hyphens with spaces
    */
    itemDispName = itemDispName.split('-').join(' ');

    return itemDispName;
};

export { provideItemDispName }


/*
if (itemDispNameArr[0] === 'deoxys' ||
    itemDispNameArr[0] === 'giratina' ||
    itemDispNameArr[0] === 'shaymin' ||
    itemDispNameArr[0] === 'basculin' ||
    itemDispNameArr.slice(0,2).join(' ') === 'darmanitan standard' ||
    itemDispNameArr[0] === 'wormadam' ||
    itemDispNameArr[1] === 'incarnate'
) {
    return itemDispNameArr[0].charAt(0).toUpperCase() + itemDispNameArr[0].slice(1,itemDispNameArr[0].length)
}
*/


