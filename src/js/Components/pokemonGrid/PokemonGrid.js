import { useState } from 'react'
import '../../../css/PokemonGrid.css'
import PkmContainer from './PkmContainer';
import PkbBtn from './PkbBtn';

const PokemonGrid = ({ pkmObjList }) => {
    const [showContainer, setShowContainer] = useState(false);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    return (
        <div className="pokemonGrid">
            <PkbBtn clicked={showContainer} toggleShowContainer={toggleShowContainer}/>
            {showContainer? <PkmContainer pkmObjList={pkmObjList}/> : <h1 id="pressPrompt">PRESS ME!</h1>}
        </div>
    )
}

const filterBySearch = () => {

}



export default PokemonGrid;
