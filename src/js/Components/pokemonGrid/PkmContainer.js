import PkmItem from './PkmItem'

const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm, showInfo }) => {
    
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
