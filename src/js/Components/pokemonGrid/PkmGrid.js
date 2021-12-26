import { useState, useEffect } from 'react'

import '../../../css/PokemonGrid.css'
import '../../../animations/global-anm.css'

import PkmContainer from './PkmContainer';
import PkmTeam from './PkmTeam'
import PkbBtn from './PkbBtn';
import Angelo from '../Angelo.js'
import FilterBar from './FilterBar'

const PkmGrid = ({ pkmObjList, loadingPkm }) => {
    const [search, setSearch] = useState('');
    const [showContainer, setShowContainer] = useState(false);
    const [selectedPkm, setSelectedPkm] = useState([]);

    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    useEffect(() => {
        // Find a way to set selected for those inside the team
            // Maybe keep that state inside the pkmData?
            // Maybe brute-force checking each one while filtering?? Idk
    });

    const addPkm = (pkmData) => {
        console.log('Adding Pokemon ' + pkmData.name);
        if (selectedPkm.length < 6) {
            setSelectedPkm((prevSelectedPkm) => {
                let newSelectedPkm = [...prevSelectedPkm, pkmData];
                console.log('Selected Pkm: ' + newSelectedPkm[0].name);
                console.log('Num Pkm: ' + newSelectedPkm.length);
                return newSelectedPkm;
            });
        }
    }

    let filteredPkmList = filterBySearch(pkmObjList, search);

    return (
        <div className="pkmGrid-container">
            {showContainer && <PkmTeam pkmTeam={selectedPkm}/>}
            <PkbBtn loadingPkm={loadingPkm} togglePkbBtn={toggleShowContainer}/>
            {showContainer? 
                <>
                    <FilterBar search={search} setSearch={setSearch}/>
                    <PkmContainer pkmObjList={filteredPkmList} loadingPkm={loadingPkm} addPkm={addPkm}/> 
                </>
                : 
                <>
                    <h1 id="pressPrompt" className="fadeIn-animation">WELCOME TO MY DOMAIN</h1>
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
