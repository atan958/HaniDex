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
    /*
    / Manages the state of the search bar and what's being typed in it;
    */
    const [search, setSearch] = useState('');

    /*
    / Used to manage which page (HaniDex or the Welcome Page) to display;
    /
    / Intitial states => true: "HaniDex", false: "Welcome Page"
    /
    */
    const [showContainer, setShowContainer] = useState(true);
    /*
    / Method: Used to toggle the value of the showContainer state
    */
    const toggleShowContainer = () => {
        setShowContainer((prevSc) => {
            setShowContainer(!prevSc);
        });
    }
    
    /*
    / Is used to manage/store the data of the currently selected Pokemon (i.e. team members);
    */
    const [selectedPkm, setSelectedPkm] = useState([]);
    /*
    / Methods: 
    /
    / Adds the data of a specified Pokemon into the "selectedPkm" state
    / Given there's less than 6 Pokemon AND the Pokemon being added is not already there, respectively
    */
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
    /*
    / Removes the data of a specified Pokemon from the "selectedPkm" state
    */
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

    /*
    / Used to decide whether or not to show the PkmInfo component (i.e. the overlay for );
    */ 
    const [shouldShowInfo, setShouldShowInfo] = useState(false);
    /*
    / pkmToShow is used supplementary to aforementioned state (i.e. is a "mock state") as it holds the data for the Pokemon to be shown;
    */
    const pkmToShow = useRef(null);
    /*
    / Methods:
    /
    / Used to hide the overlay
    */
    const hideInfo = () => {setShouldShowInfo(false);}
    /*
    / Used to show the overlay with the data of the Pokemon specified
    */
    const showInfo = (pkmData) => {
        pkmToShow.current = pkmData;
        setShouldShowInfo(true);
    }

    /*
    / *** TO BE REMOVED ***
    */
    console.log('Rendered from PkmGrid');

    /*
    / Filters the list of Pokemon by those which match what's typed on the search bar
    / 
    / Note: Maybe move this functionality into the PkmContainer component instead?
    */
    let filteredPkmList = filterBySearch(pkmDataList, search);

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


/* 
/ Filters the list of Pokemon to pass down to PkmContainer by what's currently type in the search bar
*/
const filterBySearch = (pkmDataList, search) => {
    let filteredPkmList = pkmDataList.filter((pkmData) => {
        return pkmData.name.includes(search.toLowerCase());
    });
    return filteredPkmList;
}

export default PkmGrid;
