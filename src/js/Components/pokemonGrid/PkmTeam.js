import { useState } from 'react'

import pkmTrainer from '../../../angelo-assets/pokemon-trainer.png'

const PkmTeam = () => {
    const [hovered, setHovered] = useState(false);
    const [showTeam, setShowTeam] = useState(false);

    const hoverOn = () => {
        setHovered(true);
    }

    const hoverOff= () => {
        setHovered(false);
    }



    return (
        <>
        <div className="pkmTeam-container-container fadeIn-animation" onClick={() => console.log()}>
            <div className="pkmTeam-container">
                <img src={pkmTrainer}  className={`pkmTeam ${hovered && 'rattle-animation'}`} onMouseOver={hoverOn} onMouseLeave={hoverOff}/>
                {hovered && <div className="teamTitle fasterFadeIn-animation">Team</div>}
            </div>
        </div>
        <div>
            {showTeam? null : null}
        </div>
        </>
    )
}

export default PkmTeam
