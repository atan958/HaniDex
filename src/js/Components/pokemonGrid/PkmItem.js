import { useState } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'

const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm, showInfo }) => {
    /*
    / Controls the hover state of the highest-level container of the PkmItem component
    */
    const [hovered, setHovered] = useState(false);
    const hoverOn = () => { setHovered(true); }
    const hoverOff = () => { setHovered(false); }

    /* 
    / Toggles the selected property of the given Pokemon
    */
    const toggleSelected = () => {
        pkmData.selected? 
        rmvPkm(pkmData)
        :
        addPkm(pkmData)
    }

    /*
    / Converts the first letter of the Pokemon to upper-case
    */
    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <>
        <div className={`container grid-item pkmItem-container fadeIn-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  style={pkmData.selected? { backgroundColor: '#b44b4b' } : null} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={`overlay-div ${(atMaxNumPkm && !pkmData.selected) && 'cantSelectPkm'} ${pkmData.selected? 'red-btn' : 'green-btn'}`} onClick={toggleSelected}>
                {pkmData.selected? 'Remove' : 'Add'}
            </div>
            <div className={`pkmItemImg-container ${(pkmData.selected || hovered) && 'shake-animation'}`} onClick={() => {showInfo(pkmData)}}>
                <img className="pkmItem-img" src={pkmData.png}/>
            </div>
            <h4>{pkmName}</h4>
        </div>
        </>
    )
}

export default PkmItem


// Note: shake-animation is a global css animation so "hovered" state is valid?