const providePkmImg = (pkmName) => {
    let pkmPng, pkmImg;
    try {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${pkmName}.png`);
    }
    catch(e) {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);
        //pkmImg = <img src={pkmPng} width="75" height="160" style={{ marginTop: '20px'}}></img>;
        //console.log('error mayt ' + pkmName);
    }
    return pkmPng;
}

export { providePkmImg }