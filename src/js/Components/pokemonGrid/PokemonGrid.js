import { useState } from 'react'
import '../../../css/PokemonGrid.css'
import PkmContainer from './PkmContainer';
import PkbBtn from './PkbBtn';
import Angelo from '../Angelo.js'
import FilterBar from './FilterBar'

const PokemonGrid = ({ pkmObjList, search, setSearch }) => {
    const [showContainer, setShowContainer] = useState(false);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    return (
        <div className="pokemonGrid">
            <PkbBtn clicked={showContainer} toggleShowContainer={toggleShowContainer}/>
            {showContainer? 
                <>
                    <FilterBar search={search} setSearch={setSearch}/>
                    <PkmContainer pkmObjList={pkmObjList}/> 
                </>
                : 
                <>
                    <h1 id="pressPrompt">PRESS ME!</h1>
                    <Angelo />
                </>}
        </div>
    )
}

const filterBySearch = () => {

}



export default PokemonGrid;
