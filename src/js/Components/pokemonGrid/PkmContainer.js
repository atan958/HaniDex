import PkmItem from './PkmItem'

/*
/ Used to display all the Pokemon which made it through the filter
*/
const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm, showInfo, incPkmContentIndex, decPkmContentIndex, showNextBtn, showPrevBtn, search }) => {
    /*
    / Creates a collection of PkmItem components; 1 for each Pokemon in the list
    */
    const pkmItemList = pkmDataList.map((pkmData) => {
        return <PkmItem key={pkmData.name.default} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={atMaxNumPkm} showInfo={showInfo} search={search}/>
    });

    /*
    / *** TO BE REMOVED ***
    */
    console.log('Rendered at PkmContainer');

    return (
        <>
        {loadingPkm? 
            <div className="pkmItem-container-container-container fasterFadeIn-animation">
                <div className="loadingPkm-container-container">
                    <div className="loadingPkm-container">
                        Loading...
                    </div>
                </div>
            </div>
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

export default PkmContainer
