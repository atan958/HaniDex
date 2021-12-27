import { useState } from 'react'

import '../../../animations/pkm-grid/pkmItem-anm.css'


const PkmItem = ({ pkmData, addPkm, rmvPkm, atMaxNumPkm }) => {
    const [hovered, setHovered] = useState(false);

    const hoverOn = () => {setHovered(true)}
    const hoverOff = () => {setHovered(false)}

    const toggleSelected = () => {
        pkmData.selected? 
        rmvPkm(pkmData)
        :
        addPkm(pkmData)
    }

    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <div className={`grid-item pkmItem-container fadeIn-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'} ${(atMaxNumPkm && !pkmData.selected) && 'cantSelectPkm'}`}  style={pkmData.selected? { backgroundColor: '#b44b4b' } : null} onClick={toggleSelected} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className={` ${(pkmData.selected || hovered) && 'shake-animation'}`}>{pkmData.img}</div>
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PkmItem