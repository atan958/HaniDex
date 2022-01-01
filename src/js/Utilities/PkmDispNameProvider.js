const provideItemDispName = (pkmName) => {

    /*
    / Works for thecase when Pokemon have only a single name
    */
    if(!pkmName.includes('-') || (!pkmName.includes('mr') && !pkmName.includes('jr'))) { return pkmName }

    if(pkmName.includes('mr')) {
        let indexOfMr = pkmName.indexOf('mr');
        
    }

    let itemDispName = pkmName.split('-').join(' ');

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


