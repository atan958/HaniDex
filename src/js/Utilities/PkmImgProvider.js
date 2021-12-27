const providePkmImg = (pkmName) => {
    let pkmPng, pkmImg;
    try {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/${pkmName}.png`);
        pkmImg = <img src={pkmPng} width="150" height="180"></img>;
    }
    catch(e) {
        pkmPng = require(`../../pokemon-assets/assets/img/pokemon/missingno.png`);
        pkmImg = <img src={pkmPng} width="75" height="160" style={{ marginTop: '20px'}}></img>;
        console.log('error mayt ' + pkmName);
    }
    return [pkmPng, pkmImg];
}

export { providePkmImg }