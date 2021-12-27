import PkmItem from './PkmItem'

const PkmContainer = ({ pkmDataList, loadingPkm, addPkm, rmvPkm }) => {
    
    const pkmItemList = pkmDataList.map((pkmData) => {
        return <PkmItem key={pkmData.name + new Date().toDateString()} pkmData={pkmData} addPkm={addPkm} rmvPkm={rmvPkm}/>
    });
    

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
