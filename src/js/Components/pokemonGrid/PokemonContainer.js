import PokemonItem from './PokemonItem'
import PokemonProvider from '../../Utilities/PokemonProvider';

const PokemonContainer = () => {
    
    const pkmObjList = PokemonProvider();

    const pkmItemList = pkmObjList.map((pkmObj, i) => {
        return renderPokemonItem(pkmObj);
    });

    return (
        <div className="grid-container gcBG">
            {pkmItemList}
        </div>
    )
}

const renderPokemonItem = (pkmObj) => {
    let pkmPng = require(`../../../pokemon-assets/assets/img/pokemon/${pkmObj.name}.png`);
    let pkmImg = <img src={pkmPng} width="100" height="120"></img>;
    let pkmData = { ...pkmObj, img: pkmImg };
    
    return <PokemonItem key={pkmObj.name} pkmData={pkmData}/>;
}

export default PokemonContainer
