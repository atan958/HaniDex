import { useState } from 'react'

import pkmTrainer from '../../../angelo-assets/pokemon-trainer.png'

const PkmTeam = ({ pkmTeam }) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const hoverOn = () => {
        setHovered(true);
    }

    const hoverOff= () => {
        setHovered(false);
    }

    const showTeam = () => {
        console.log(pkmTeam);
        setClicked(!clicked);
    }


    return (
        <div className="pkmTeam-container-container fadeIn-animation" onClick={() => console.log()}>
            <div className="pkmTeam-container">
                <img src={pkmTrainer}  className={`pkmTeam ${hovered && 'rattle-animation'}`} onMouseOver={hoverOn} onMouseLeave={hoverOff} onClick={showTeam}/>
                {hovered && <div className="teamTitle fasterFadeIn-animation">Team</div>}
            </div>
            <div>
                {clicked? <div>sup bitch</div> : null}
            </div>
        </div>
    )
}

export default PkmTeam
