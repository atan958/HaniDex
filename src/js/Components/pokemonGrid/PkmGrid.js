import { useState, useEffect, useRef } from 'react'

import '../../../css/PokemonGrid.css'
import '../../../animations/global-anm.css'

import PkmContainer from './PkmContainer';
import PkmTeam from './PkmTeam'
import PkbBtn from './PkbBtn';
import Angelo from '../Angelo.js'
import FilterBar from './FilterBar'
import PkmInfo from './PkmInfo';

const PkmGrid = ({ pkmDataList, loadingPkm }) => {
    const [search, setSearch] = useState('');
    const [showContainer, setShowContainer] = useState(true);      // set to false to make "Beautiful Man" the landing page
    const [selectedPkm, setSelectedPkm] = useState([]);

    const [shouldShowInfo, setShouldShowInfo] = useState(false);
    const pkmToShow = useRef(null);

    const hideInfo = () => {setShouldShowInfo(false);}
    const showInfo = (pkmData) => {
        pkmToShow.current = pkmData;
        setShouldShowInfo(true);
    }
    
    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }

    console.log('Rendered from PkmGrid');
    console.log(pkmDataList);
    try {
        console.log('selected');
        console.log(selectedPkm.filter((pkm)=>pkm.name=='bulbasaur')[0]);
        console.log('data list');
        console.log(pkmDataList.filter((pkm)=>pkm.name=='bulbasaur')[0]);
    }
    catch(e) {
    }

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
    let filteredPkmList = filterBySearch(pkmDataList, search);

    try {
        console.log('filtered list');
        console.log(filteredPkmList.filter((pkm)=>pkm.name=='bulbasaur')[0]);
    }
    catch(e) {
    }

    return (
        <>
        <div className="pkmGrid-container">
            {shouldShowInfo && <PkmInfo pkmToShow={pkmToShow.current} hideInfo={hideInfo}/>}
            {showContainer && 
                <>
                <div className="hanidex-logo-container fadeIn-animation">
                    HANI
                    <span className="hanidex-logo-dex">
                        DEX
                    </span>
                </div>
                <PkmTeam pkmTeam={selectedPkm} rmvPkm={rmvPkm}/>
                </>
            }
            <PkbBtn loadingPkm={loadingPkm} togglePkbBtn={toggleShowContainer}/>
            {showContainer ? 
                <>
                    <FilterBar search={search} setSearch={setSearch}/>
                    <PkmContainer pkmDataList={filteredPkmList} loadingPkm={loadingPkm} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={selectedPkm.length == 6} showInfo={showInfo}/> 
                </>
                : 
                <>
                    <h1 id="pressPrompt" className="fadeIn-animation">WELCOME TO MY DOMAIN</h1>
                    <Angelo />
                </>}
        </div>
        </>
    )
}

const filterBySearch = (pkmDataList, search) => {
    let filteredPkmList = pkmDataList.filter((pkmData) => {
        return pkmData.name.includes(search.toLowerCase());
    });
    return filteredPkmList;
}

export default PkmGrid;
