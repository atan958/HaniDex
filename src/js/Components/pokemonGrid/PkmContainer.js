import PkmItem from './PkmItem'

const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm, atMaxNumPkm }) => {
    
    const pkmItemList = pkmDataList.map((pkmData) => {
        return <PkmItem key={pkmData.name} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm} atMaxNumPkm={atMaxNumPkm}/>
    });

    console.log('Rendered at PkmContainer');

    return (
        <>
        {loadingPkm? 
            <div className="pkmItem-container-container">
                <div className="loadingPkm-container-container">
                    <div className="loadingPkm-container">
                        Loading...
                    </div>
                </div>
            </div>
        :
            <div className="grid-container pkmItem-container-container">
                {pkmItemList}
            </div>
        }
        </>
    )
}

export default PkmContainer
