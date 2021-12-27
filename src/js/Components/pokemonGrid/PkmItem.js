import { useState, useEffect, useRef } from 'react'

const PkmItem = ({ pkmData, addPkm, rmvPkm }) => {
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);
    const firstUpdate = useRef(true);

    const hoverOn = () => {setHovered(true)}
    const hoverOff = () => {setHovered(false)}

    const toggleSelected = () => {
        // Need to check whether Team.length < 6 otherwise state is toggled despite not adding/removing pokemon
        setSelected((prevSelected) => {
            return !prevSelected;
        });
    }

    useEffect(() => {
        //console.log('selected ' + selected);
        firstUpdate.current?                // prevents adding after first render
            firstUpdate.current = false 
            :  
            (selected? 
                addPkm(pkmData)
                :
                rmvPkm(pkmData)
            );
    },[selected]);


    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <div className={`grid-item pkmItem-container fadeIn-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'}`}  style={pkmData.selected? { backgroundColor: '#b44b4b' } : null} onClick={toggleSelected} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={` ${hovered && 'shake-animation'}`}>{pkmData.img}</div>
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PkmItem