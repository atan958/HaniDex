import PkmItem from './PkmItem'

const PkmContainer = ({ pkmObjList, loadingPkm }) => {
    const pkmItemList = pkmObjList.map((pkmObj, i) => {
        return renderPokemonItem(pkmObj);
    });

    return (
        <>
        {loadingPkm? 
            <div className="pkmItem-container">
                <div className="loadingPkm-container-container">
                    <div className="loadingPkm-container">
                        Loading...
                    </div>
                </div>
            </div>
        :
            <div className="grid-container pkmItem-container">
                {pkmItemList}
            </div>
        }
        </>
    )
}

const renderPokemonItem = (pkmObj) => {
    let pkmPng, pkmImg, pkmData;
    try {
        pkmPng = require(`../../../pokemon-assets/assets/img/pokemon/${pkmObj.name}.png`);
        pkmImg = <img src={pkmPng} width="150" height="180"></img>;
        pkmData = { ...pkmObj, img: pkmImg };
    }
    catch(e) {
        pkmPng = require(`../../../pokemon-assets/assets/img/pokemon/missingno.png`);
        pkmImg = <img src={pkmPng} width="75" height="160" style={{ marginTop: '20px'}}></img>;
        pkmData = { ...pkmObj, ...{name: 'undef', img: pkmImg} };
        console.log('error mayt');
    }
    return <PkmItem key={pkmObj.name} pkmData={pkmData}/>;
}

export default PkmContainer
