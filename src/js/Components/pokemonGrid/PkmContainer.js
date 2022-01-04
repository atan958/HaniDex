import { useState, useEffect } from 'react'

import PkmItem from './PkmItem'

import { numRuns } from '../../Utilities/PokeApiController'

/*
/ Used to display all the Pokemon which made it through the filter
*/
const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm, showInfo, incPkmContentIndex, decPkmContentIndex, showNextBtn, showPrevBtn, search }) => {
    /*
    / Creates a collection of PkmItem components; 1 for each Pokemon in the list
    */
    const pkmItemList = pkmDataList.map((pkmData) => {
        //console.log(pkmData.name.default + ": " + pkmData.desc.default);
        return <PkmItem key={pkmData.name.default} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={atMaxNumPkm} showInfo={showInfo} search={search}/>
    });

    /*
    / *** TO BE REMOVED ***
    */
    console.log('Rendered at PkmContainer');

    return (
        <>
        {loadingPkm? 
            <PkmContainerLd/>
        :
            <div className="pkmItem-container-container-container">
                {showPrevBtn 
                &&
                <div className="pkmItemsContainer-nav nav-left" onClick={decPkmContentIndex}> 
                    <div className="left-btn"/>
                </div>
                }
                <div className="grid-container pkmItem-container-container fasterFadeIn-animation">
                    {pkmItemList}
                </div>
                {showNextBtn
                &&
                <div className="pkmItemsContainer-nav nav-right" onClick={incPkmContentIndex}> 
                    <div className="right-btn"/>
                </div>
                }
            </div>
        }
        </>
    )
}

/*
/ Displays how much of the necessary data has been loaded into the application
*/
const PkmContainerLd = () => {
    /*
    / Loading state's value is never used => Only needed to re-render component
    */
    const [loading, setLoading] = useState(0);
    /*
    / Schedules an update on the loading display every 0.1 seconds
    */
    useEffect(() => {
        const myTimeout = setTimeout(() => {
            setLoading(loading + 1);
        }, 100);

        return(() => {
        clearTimeout(myTimeout)
        });
    });

    return (
        <div className="pkmItem-container-container-container fasterFadeIn-animation">
            <div className="loadingPkm-container-container">
                <div className="pkmContainer-ld-progBar-container">
                    <div className="pkmContainer-ld-progBar-fill" style={{ width: `${Math.round((numRuns.current/numRuns.total)*1000000)/10000}%` }}>
                        {Math.round((numRuns.current/numRuns.total)*100)}%
                    </div>
                </div> 
                
            </div>
        </div>
    );
}

/*
<div className="loadingPkm-container">
    Loading... {numRuns}
</div>
*/


export default PkmContainer
