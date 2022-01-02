import { useState } from 'react'

import PkmTeamGrid from './PkmTeamGrid';

import pkmTrainer from '../../../angelo-assets/pokemon-trainer.png'

/*
/ Used to display the Pokemon which are selected by the user
*/
const PkmTeam = ({ pkmTeam, rmvPkm, showInfo }) => {
    /*
    / Manages the hover state of the highest-level container of the PkmTeam component (i.e. containing both the team-icon and the team-grid);
    / 
    / Note: toggleHover doesn't work in this case;
    */
    const [hovered, setHovered] = useState(false);
    const hoverOn = () => { setHovered(true); }
    const hoverOff= () => { setHovered(false); }

    return (
        <>
        <div className={`pkmTeam-container fasterFadeIn-animation`} onClick={() => console.log()} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            {hovered && <PkmTeamGrid pkmTeam={pkmTeam} rmvPkm={rmvPkm} showInfo={showInfo}/>}
            <div className={`pkmTeamIcon-container ${hovered && 'pkmTeamIcon-container-extension'}`}>
                <img src={pkmTrainer}  className={`pkmTeamIcon ${hovered && 'rattle-animation'}`}/>
                {hovered && <div className="pkmTeamTitle fasterFadeIn-animation">Team</div>}
            </div>
        </div>
        </>
    )
}

export default PkmTeam