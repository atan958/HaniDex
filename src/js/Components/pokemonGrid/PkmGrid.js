import { useState } from 'react'
import '../../../css/PokemonGrid.css'
import PkmContainer from './PkmContainer';
import PkbBtn from './PkbBtn';
import Angelo from '../Angelo.js'
import FilterBar from './FilterBar'

const PkmGrid = ({ pkmObjList, loadingPkm }) => {
    const [search, setSearch] = useState('');
    const [showContainer, setShowContainer] = useState(false);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    let filteredPkmList = filterBySearch(pkmObjList, search);

    return (
        <div className="pokemonGrid">
            <PkbBtn loadingPkm={loadingPkm} togglePkbBtn={toggleShowContainer}/>
            {showContainer? 
                <>
                    <FilterBar search={search} setSearch={setSearch}/>
                    <PkmContainer pkmObjList={filteredPkmList} loadingPkm={loadingPkm}/> 
                </>
                : 
                <>
                    <h1 id="pressPrompt">WELCOME TO MY DOMAIN</h1>
                    <Angelo />
                </>}
        </div>
    )
}

const filterBySearch = (pkmObjList, search) => {
    let filteredPkmList = pkmObjList.filter((pkmObj) => {
        return pkmObj.name.includes(search.toLowerCase());
    });
    return filteredPkmList;
}



export default PkmGrid;
