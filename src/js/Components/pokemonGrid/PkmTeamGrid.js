import '../../../animations/pkm-grid/pkmTeamMember-anm.css'

/*
/ Displays the "selected" Pokemon (i.e. team members)
*/
const PkmTeamGrid = ({ pkmTeam, rmvPkm }) => {
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
        <div className="pkmTeamGrid-container fasterFadeIn-animation" >
            {renderPkmMembers()}
            {renderPlaceHolders()}
        </div>
    )
}

/*
/ Used for displaying each of the selected Pokemon
*/
const PkmTeamMember = ({ pkmMember, rmvPkm }) => {
    /*
    / These are the primary contents of each of the team grid's member containers
    */
    let pkmName, pkmImg, rmvBtn, hoverTxt;
    
    /*
    / try is used to produce the corresponding content for each of the team members;
    */
    try {
        pkmName = pkmMember.name.charAt(0).toUpperCase() + pkmMember.name.slice(1,pkmMember.name.length);
        hoverTxt = <span className="tooltiptext">{pkmName}</span>;
        pkmImg = <img src={pkmMember.png} className="pkmShake-animation-hovered" width="62" height="70" ></img>
        rmvBtn = <button className={`rmvMember-btn`} onClick={() => rmvPkm(pkmMember)}>X</button>;
    } 
    /*
    / catch is used to produce an empty container;
    */
    catch(e) {
        pkmName = '--';
        hoverTxt = <span className="tooltiptext">{pkmName}</span>;
        pkmImg = null;
        rmvBtn = null;
    }

    return (
        <div className={`pkmTeamMember-container tooltip`}>
            {hoverTxt}
            <div className={'pkmRoar-animation-hovered'}>
                {pkmImg}
            </div>
            {rmvBtn}
        </div>
        );
}

export default PkmTeamGrid
