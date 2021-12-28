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
        <div className={`container grid-item pkmItem-container fadeIn-animation ${pkmData.selected?'pkmItem-selected' : 'pkmItem-notSelected'} ${(atMaxNumPkm && !pkmData.selected) && 'cantSelectPkm'}`}  style={pkmData.selected? { backgroundColor: '#b44b4b' } : null} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            <div className="overlay-div" onClick={toggleSelected} style={{ backgroundColor: pkmData.selected? '#970000' : 'green'}}>
                {pkmData.selected? 'Remove' : 'Add'}
            </div>
            <div className={` ${(pkmData.selected || hovered) && 'shake-animation'}`}>
                <img src={pkmData.png} width="150" height="180"/>
            </div>
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PkmItem