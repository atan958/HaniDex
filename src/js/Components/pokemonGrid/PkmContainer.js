import { useState, useEffect, useMemo } from 'react'

import PkmItem from './PkmItem'

import { numRuns } from '../../Utilities/PokeApiController'
import { provideRandomPkmSprite, provideMiscPng } from '../../Utilities/PkmGraphicsProvider'

/*
/ Component: Displays all the Pokemon which made it through the filtering process
*/
const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm, showInfo, incPkmContentIndex, decPkmContentIndex, showNextBtn, showPrevBtn, search }) => {
    /*
    / Creates a collection of PkmItem components; 1 for each Pokemon in the list
    */
    const pkmItemList = pkmDataList.map((pkmData) => {
        return <PkmItem key={pkmData.name.default} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={atMaxNumPkm} showInfo={showInfo} search={search}/>
    });

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
/ Temporary Component: Displays how much of the necessary data has been loaded into the application
*/
const PkmContainerLd = () => {
    /*
    / The value of the 'loading' state is never used => Only need the state change to re-render component
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

    /*
    / Obtains a random Pokemon sprite at startup (during loading time) which the component keeps for its entire lifetime
    */
    const randomPkmSprite = useMemo(() => provideRandomPkmSprite(), []); 
    /*
    / Obtains the "Who's that Pokemon" symbol png
    */
    const whosThatPkmSym = provideMiscPng('whos-sym');

    return (
        <div className="pkmItem-container-container-container fasterFadeIn-animation">
            <div className="loadingPkm-container-container">
                <div className="whos-that-pkm-pkmImg-container">
                    <img className={`whos-that-pkm-pkm-img ${(numRuns.current>=numRuns.total*0.75) && 'whos-that-pkm-imgShown pkmRoar-animation'}`} src={randomPkmSprite}/>
                </div>
                <div className="whos-that-pkm-titleImg-container">
                        <img className="whos-that-pkm-title-img" src={whosThatPkmSym}/>
                    </div>
                <div className="pkmContainer-ld-progBar-container">
                    <div className="pkmContainer-ld-progBar-fill" style={{ width: `${Math.round((numRuns.current/numRuns.total)*100)}%` }}/>
                    <div className="pkmContainer-ld-percent">{Math.round((numRuns.current/numRuns.total)*100)}%</div>
                </div> 
            </div>
        </div>
    );
}

export default PkmContainer
