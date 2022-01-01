const getItemDispName = (pkmName) => {

    /*
    / This works for the Pokemon with only a single name (i.e. no hyphens)
    */
    if(!pkmName.includes('-')) { return pkmName.charAt(0).toUpperCase() + pkmName.slice(1,pkmName.length) }

    let itemDispNameArr = pkmName
        .split('-')
        .filter((name) => {
            return name != 'm' && name != 'f' && name != 'mega';
        });
        
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

    let itemDispName = itemDispNameArr.map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1,name.length)
    })
    .join(' ')

    return itemDispName;
};

export { getItemDispName }