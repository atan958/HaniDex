import { useState, useEffect, useRef } from 'react'

const PkmItem = ({ pkmData, addPkm }) => {
    const [selected, setSelected] = useState(false);
    const [hovered, setHovered] = useState(false);
    const firstUpdate = useRef(true);

    const hoverOn = () => {
        setHovered(true)
    }

    const hoverOff = () => {
        setHovered(false)
    }

    const toggleSelected = () => {
        setSelected((prevSelected) => {
            return !prevSelected;
        });
    }

    useEffect(() => {
        firstUpdate.current? 
            firstUpdate.current = false 
            :  
            addPkm({...pkmData});
    },[selected]);

    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <div className={`grid-item pkmItem-container fadeIn-animation`}  style={selected? { backgroundColor: '#b44b4b'} : null} onClick={toggleSelected} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={` ${hovered && 'shake-animation'}`}>{pkmData.img}</div>
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PkmItem