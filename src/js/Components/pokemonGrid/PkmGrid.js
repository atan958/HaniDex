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
        console.log(selectedPkm);
        // Find a way to set selected for those inside the team
            // Maybe keep that state inside the pkmData?
            // Maybe brute-force checking each one while filtering?? Idk
    });

    // Note: Second clause is to fix bug when a PkmItem is re-rendered e.g. when searching
    const addPkm = (pkmData) => {
        if (selectedPkm.length < 6 && selectedPkm.filter((prevPkm) => prevPkm==pkmData).length == 0) {
            console.log('Adding Pokemon ' + pkmData.name);
            pkmData.selected = true;
            setSelectedPkm((prevSelectedPkm) => {
                let newSelectedPkm = [...prevSelectedPkm, pkmData];
                return newSelectedPkm;
            });
        } else {
            console.log("REACHED LIMIT");
        }
    }

    const rmvPkm = (pkmData) => {
        console.log('Removing Pokemon ' + pkmData.name);
        pkmData.selected = false;
        setSelectedPkm((prevSelectedPkm) => {
            let newSelectedPkm = prevSelectedPkm.filter((prevPkm) => {
                return prevPkm.name != pkmData.name;
            });
            return newSelectedPkm;
        });
    }

    // Calls this everytime a Pokemon is added => Should move filtering to PkmContainer I think
    let filteredPkmList = filterBySearch(pkmObjList, search);

    return (
        <div className="pkmGrid-container">
            {showContainer && <PkmTeam pkmTeam={selectedPkm}/>}
            <PkbBtn loadingPkm={loadingPkm} togglePkbBtn={toggleShowContainer}/>
            {showContainer? 
                <>
                    <FilterBar search={search} setSearch={setSearch}/>
                    <PkmContainer pkmDataList={filteredPkmList} loadingPkm={loadingPkm} addPkm={addPkm} rmvPkm={rmvPkm}/> 
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
