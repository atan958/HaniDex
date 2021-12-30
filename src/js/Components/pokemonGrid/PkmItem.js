import { useState } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'

const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm, showInfo, search }) => {
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
    / *** TO BE FURTHER DOCUMENTED ***
    /
    / Highlights the searched substring from the names of the Pokemon which are shown
    */
    let indexOfSearch = pkmData.name.indexOf(search);
    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);
    let leadingName = pkmName.slice(0,indexOfSearch);
    
    let searchCapt;
    (indexOfSearch==0)?
        searchCapt = search.charAt(0).toUpperCase() + search.slice(1,search.length)
        :
        searchCapt = search;
        
    let trailingName;
    (indexOfSearch==-1)? 
        trailingName = ''
        :
        trailingName = pkmName.slice(indexOfSearch + search.length, pkmData.name.length);

    return (
        <>
        <div className={`container grid-item pkmItem-container fasterFadeIn-half-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={`overlay-div ${(atMaxNumPkm && !pkmData.selected) && 'cantSelectPkm'} ${pkmData.selected? 'red-btn' : 'green-btn'}`} onClick={toggleSelected}>
                {pkmData.selected? 'Remove' : 'Add'}
            </div>
            <div className={`pkmItemImg-container ${(pkmData.selected || hovered) && 'shake-animation'}`} onClick={() => {showInfo(pkmData)}}>
                <img className={`pkmItem-img ${pkmData.selected && 'pkmRoar-animation'}`} src={pkmData.png}/>
            </div>
            <h4>{leadingName}<span style={{color: 'green'}}>{searchCapt}</span>{trailingName}</h4>
        </div>
        </>
    )
}

export default PkmItem


// Note: shake-animation is a global css animation so "hovered" state is valid?