import PkmItem from './PkmItem'

/*
/ Used to display all the Pokemon which made it through the filter
*/
const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm, showInfo }) => {
    /*
    / Creates a collection of PkmItem components; 1 for each Pokemon in the list
    */
    const pkmItemList = pkmDataList.map((pkmData) => {
        return <PkmItem key={pkmData.name} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={atMaxNumPkm} showInfo={showInfo}/>
    });

    console.log('Rendered at PkmContainer');

    return (
        <>
        {loadingPkm? 
            <div className="pkmItem-container-container fadeIn-animation">
                <div className="loadingPkm-container-container">
                    <div className="loadingPkm-container">
                        Loading...
                    </div>
                </div>
            </div>
        :
            <div className="grid-container pkmItem-container-container fadeIn-animation">
                {pkmItemList}
            </div>
        }
        </>
    )
}

export default PkmContainer
