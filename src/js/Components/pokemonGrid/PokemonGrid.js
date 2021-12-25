import { useState } from 'react'
import '../../../css/PokemonGrid.css'
import PkmContainer from './PkmContainer';
import PkbBtn from './PkbBtn';

const PokemonGrid = () => {
    const [showContainer, setShowContainer] = useState(true);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    return (
        <div className="pokemonGrid">
            <PkbBtn clicked={showContainer} toggleShowContainer={toggleShowContainer}/>
            {showContainer && <PkmContainer />}
        </div>
    )
}



export default PokemonGrid;
