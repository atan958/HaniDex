import { useState, useEffect, useRef, useMemo } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'

const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm, showInfo, search }) => {
    /*
    / Used to determine whether it's the first render of the PkmItem component => Can use in a logic expression to imitate a ComponentDidUpdate
    */
    const firstRender = useRef(true);
    /*
    / This is executed AFTER the component first is mounted
    */
    useEffect(() => {
        firstRender.current = false;
    }, []);

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

    /***********************************************************************************/
    /* Highlights the searched substring from the names of the Pokemon which are shown */
    /***********************************************************************************/
    /*
    / Capitalizes the first letter of the name
    */
    let pkmName = pkmData.name.pkmItem.charAt(0).toUpperCase() + pkmData.name.pkmItem.slice(1, pkmData.name.pkmItem.length);
    /*
    / Disregards leading and trailing white space AND case-sensitivity of the search
    */
    let searchLc = search.trim().toLowerCase();
    /*
    / Finds the location of the search in the Pokemon's name
    */
    let indexOfSearch = pkmName.toLowerCase().indexOf(searchLc);

    /*
    / Creates the un-highlighted part of the name BEFORE the searched substring
    */
    let leadingName = pkmName.slice(0,indexOfSearch);
    /*
    / Creates the highlighterd part of the name which is the searched part
    */
    let searchCased;
    (indexOfSearch === 0 || pkmName.charAt(indexOfSearch-1) === ' ')?
        searchCased = searchLc.charAt(0).toUpperCase() + searchLc.slice(1,searchLc.length)  // Ensures proper capitalization if searched substring starts on a capital letter (i.e. first letter or after a white space)
        :
        searchCased = searchLc;
    /*
    / Creates the un-highlighted part of the name AFTER the searched substring
    */    
    let trailingName;
    (indexOfSearch === -1)? 
        trailingName = ''
        :
        trailingName = pkmName.slice(indexOfSearch + searchLc.length, pkmName.length);
    /*
    / *** FINISH FOR SEARCH HIGHLIGHTING *** 
    */

    /*
    / Ensures capitalizations after every space 
    /
    / Note: This assumes there's only a single space in the name
    */
    [leadingName, searchCased, trailingName] = [leadingName, searchCased, trailingName].map((namePart) => {
        if(namePart.includes(' ')) {
            let indexOfSpace = namePart.indexOf(' ');
            namePart = namePart.slice(0,indexOfSpace+1) + namePart.charAt(indexOfSpace+1).toUpperCase() + namePart.slice(indexOfSpace+2,namePart.length);
        }
        return namePart;
    });

    /*
    / Used to store the boolean for whether the Pokemon is male or not
    */
    const isMale = useMemo(() => pkmData.gender === 'male', [pkmData.gender]);
    
    return (
        <>
        <div className={`container grid-item pkmItem-container fasterFadeIn-half-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={`overlay-div ${pkmData.selected? 'rmv-pkmItem-btn' : (atMaxNumPkm? 'cantSelectPkm' : 'add-pkmItem-btn')}`} onClick={toggleSelected}>
                {pkmData.selected? 'Remove' : (atMaxNumPkm? 'Team Full' :'Add')}
            </div>
            <div className={`pkmItemImg-container ${(pkmData.selected || hovered) && 'shake-animation'}`} onClick={() => {showInfo(pkmData)}}>
                <img className={`pkmItem-img ${firstRender.current && 'imgFadeIn-animation'} ${pkmData.selected && 'pkmRoar-animation'}`} src={pkmData.png.sprite.reg}/>
            </div>
            <h4 className={`imgFadeIn-animation ${pkmData.gender && (isMale? 'pkmGender-male' : 'pkmGender-female')}`}>
                {leadingName}
                <span style={{color: '#0046FF'}}>
                    {searchCased}
                </span>
                {trailingName}
            </h4>
        </div>
        </>
    )
}

export default PkmItem

// Note: shake-animation is a global css animation so "hovered" state is valid?