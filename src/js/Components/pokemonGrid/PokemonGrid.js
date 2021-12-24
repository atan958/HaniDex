import { useState } from 'react'
import '../../../css/PokemonGrid.css'
import PokemonContainer from './PokemonContainer';

const PokemonGrid = () => {
    const [showContainer, setShowContainer] = useState(true);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    return (
        <div className="pokemonGrid">
            <button className="btnShowContainer" onClick={toggleShowContainer}></button>
            {showContainer && <PokemonContainer />}
        </div>
    )
}



export default PokemonGrid;
