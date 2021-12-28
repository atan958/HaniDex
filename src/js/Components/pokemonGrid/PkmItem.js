import { useState } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'

import PkmInfo from './PkmInfo';

const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm }) => {
    const [hovered, setHovered] = useState(false);
    const [shouldShowInfo, setShouldShowInfo] = useState(false);

    const showInfo = () => { setShouldShowInfo(true); }
    const hideInfo = () => { setShouldShowInfo(false); }

    const hoverOn = () => { setHovered(true); }
    const hoverOff = () => { setHovered(false); }

    const toggleSelected = () => {
        pkmData.selected? 
        rmvPkm(pkmData)
        :
        addPkm(pkmData)
    }

    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <>
        <div className={`container grid-item pkmItem-container fadeIn-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  style={pkmData.selected? { backgroundColor: '#b44b4b' } : null} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={`overlay-div ${(atMaxNumPkm && !pkmData.selected) && 'cantSelectPkm'} ${pkmData.selected? 'red-btn' : 'green-btn'}`} onClick={toggleSelected}>
                {pkmData.selected? 'Remove' : 'Add'}
            </div>
            <div className={`pkmItemImg-container ${(pkmData.selected || hovered) && 'shake-animation'}`} onClick={showInfo}>
                <img className="pkmItem-img" src={pkmData.png}/>
            </div>
            <h4>{pkmName}</h4>
        </div>
        {shouldShowInfo && <PkmInfo pkmData={pkmData} hideInfo={hideInfo}/>}
        </>
    )
}

const renderPkmInfo = (pkmData) => {
    alert(pkmData.name);
    //<PkmInfo pkmData={pkmData}/>
}

export default PkmItem