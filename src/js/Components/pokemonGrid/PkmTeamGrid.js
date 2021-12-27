import { useState } from 'react'

const PkmTeamGrid = ({ hoverOn }) => {
    return (
        <div className="pkmTeamGrid-container fasterFadeIn-animation" onMouseOver={hoverOn}>
            <PkmTeamMember />
            <PkmTeamMember />
            <PkmTeamMember />
            <PkmTeamMember />
            <PkmTeamMember />
            <PkmTeamMember />
        </div>
    )
}

const PkmTeamMember = () => {
    return (
        <div className="pkmTeamMember-container ">
            <img></img>
        </div>
        );
}

export default PkmTeamGrid
