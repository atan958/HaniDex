import { useState } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'

const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm, showInfo }) => {
    /*
    / Controls the hover state of the highest-level container of the PkmItem component
    /
    / Note: There is slight redundancy with not just having a toggleHovered function, but I think it's fine;
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
    / Creates the name of the Pokemon with the first letter upper-case;
    */
    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <>
        <div className={`container grid-item pkmItem-container fasterFadeIn-half-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  onMouseOver={hoverOn} onMouseLeave={hoverOff}>
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