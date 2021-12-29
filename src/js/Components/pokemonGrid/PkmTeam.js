import { useState } from 'react'

import PkmTeamGrid from './PkmTeamGrid';

import pkmTrainer from '../../../angelo-assets/pokemon-trainer.png'

const PkmTeam = ({ pkmTeam, rmvPkm }) => {
    /*
    / Controls the hover state of the highest-level container of the PkmTeam component (i.e. containing both the icon and the grid);
    / 
    / Note: toggleHover doesn't work in this case;
    */
    const [hovered, setHovered] = useState(false);
    const hoverOn = () => { setHovered(true); }
    const hoverOff= () => { setHovered(false); }

    return (
        <>
        <div className={`pkmTeam-container fadeIn-animation`} onClick={() => console.log()} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            {hovered && <PkmTeamGrid pkmTeam={pkmTeam} rmvPkm={rmvPkm}/>}
            <div className={`pkmTeamIcon-container ${hovered && 'pkmTeamIcon-container-extension'}`}>
                <img src={pkmTrainer}  className={`pkmTeamIcon ${hovered && 'rattle-animation'}`}/>
                {hovered && <div className="pkmTeamTitle fasterFadeIn-animation">Team</div>}
            </div>
        </div>
        </>
    )
}

export default PkmTeam