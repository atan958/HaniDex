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

const PkmContainerLd = () => {
    const [loading, setLoading] = useState(0);
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
                {Math.round((numRuns.current/numRuns.total)*100)}%
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
