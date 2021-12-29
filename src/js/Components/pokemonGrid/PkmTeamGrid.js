import { useState } from 'react'

const PkmTeamGrid = ({ hoverOn, pkmTeam, rmvPkm }) => {
    const renderPkmMembers = () => {
        return pkmTeam.map((pkmMember) => {
            return <PkmTeamMember key={pkmMember.name} pkmMember={pkmMember} rmvPkm={rmvPkm}/>
        });
    }
    const renderPlaceHolders = () => {
        let placeHolders = [];
        for (let i=pkmTeam.length; i!=6; i++) {
            console.log('here');
            placeHolders = [...placeHolders, <PkmTeamMember key={Date.now() + i} pkmMember={{}}/>];
        }
        console.log(placeHolders)
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
    const [hovered, setHovered] = useState(false);
    let pkmName, pkmImg, rmvBtn;

    // try-catch for creating place-holders
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
        <div className={`pkmTeamMember-container tooltip`} onMouseOver={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            {hovered && <span className="tooltiptext fasterFadeIn-animation">{pkmName}</span>}
            <div className={`${hovered && 'shake-animation'}`}>{pkmImg}</div>
            {hovered && rmvBtn}
        </div>
        );
}

export default PkmTeamGrid
