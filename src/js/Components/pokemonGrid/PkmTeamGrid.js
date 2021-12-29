import { useState } from 'react'

const PkmTeamGrid = ({ hoverOn, pkmTeam, rmvPkm }) => {
    /*
    / Loads all selected Pokemon (i.e. members) onto the team grid
    */
    const renderPkmMembers = () => {
        return pkmTeam.map((pkmMember) => {
            return <PkmTeamMember key={pkmMember.name} pkmMember={pkmMember} rmvPkm={rmvPkm}/>
        });
    }

    /*
    / Loads the rest of the team grid with empty containers (depending on #selected Pokemon)
    */
    const renderPlaceHolders = () => {
        let placeHolders = [];
        for (let i=pkmTeam.length; i!=6; i++) {
            console.log('here');
            placeHolders = [...placeHolders, <PkmTeamMember key={Date.now() + i} pkmMember={{}}/>];
        }
        return placeHolders;
    }
    
    return (
        <div className="pkmTeamGrid-container fasterFadeIn-animation" onMouseOver={hoverOn}>
            {renderPkmMembers()}
            {renderPlaceHolders()}
        </div>
    )
}

const PkmTeamMember = ({ pkmMember, rmvPkm }) => {
    /*
    / Controls the hover state of the highest-level container of PkmTeamMember component
    /
    / Note: toggleHover would not work for this as the remove button can't be clicked
    */
    const [hovered, setHovered] = useState(false);
    const hoverOn = () => { setHovered(true); }
    const hoverOff = () => { setHovered(false); }

    /*
    / These are the primary contents of each of the team grid's containers
    */
    let pkmName, pkmImg, rmvBtn;
    
    /*
    / The try is used to produce the corresponding content for each of the team members;
    / The catch is used to produce an empty container;
    */
    try {
        pkmName = pkmMember.name.charAt(0).toUpperCase() + pkmMember.name.slice(1,pkmMember.name.length);
        pkmImg = <img src={pkmMember.png} width="62" height="70" ></img>
        rmvBtn = <button className={`rmvMember-btn`} onClick={() => rmvPkm(pkmMember)}>X</button>;
    } 
    catch(e) {
        pkmName = '--';
        pkmImg = null;
        rmvBtn = null;
    }

    return (
        <div className={`pkmTeamMember-container tooltip`} onMouseOver={hoverOn} onMouseLeave={hoverOff}>
            {hovered && <span className="tooltiptext fasterFadeIn-animation">{pkmName}</span>}
            <div className={`${hovered && 'shake-animation'}`}>{pkmImg}</div>
            {hovered && rmvBtn}
        </div>
        );
}

export default PkmTeamGrid
