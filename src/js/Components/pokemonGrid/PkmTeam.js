import { useState } from 'react'

import PkmTeamGrid from './PkmTeamGrid';
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

    return (
        <>
        <div className={`pkmTeam-container fadeIn-animation`} onClick={() => console.log()} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            {hovered && <PkmTeamGrid pkmTeam={pkmTeam}/>}
            <div className={`pkmTeamIcon-container ${hovered && 'pkmTeamIcon-container-extension'}`}>
                <img src={pkmTrainer}  className={`pkmTeamIcon ${hovered && 'rattle-animation'}`}/>
                {hovered && <div className="pkmTeamTitle fasterFadeIn-animation">Team</div>}
            </div>
        </div>
        </>
    )
}

export default PkmTeam

        /*{
        hovered
        &&
        <div className="pkmTeamGrid-container-container fadeIn-animation" onClick={() => console.log()} onMouseLeave={hoverOff}>
            <div>
                <PkmTeamGrid hoverOn={hoverOn}/>
            </div>
        </div>
        }*/