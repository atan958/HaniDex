import { useState, useRef } from 'react'

import '../../../css/PkmInfo.css'

/*
/ Displays the information of a specified Pokemon on an overlay
*/
const PkmInfo = ({pkmToShow, hideInfo}) => {
    const [showShiny, setShowShiny] = useState(false);
    const toggleShowShiny = () => { setShowShiny(!showShiny) };

    /*
    / Capitalizes the first letter of every name of the Pokemon
    */
    const displayName = pkmToShow.name.pkmItem.split(' ').map((namePart) => {
        return namePart.charAt(0).toUpperCase() + namePart.slice(1, namePart.length);
    }).join(' ');

    const descToShow = rmvEscChars(pkmToShow.desc.default);

    const renderStatProgBars = () => {
        return ['HP', 'ATK', 'DEF', 'SP. ATK', 'SP. DEF', 'SPD'].map((stat) => {
            return <PkmStatProgBar stat={stat}/>
        });
    }

    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-half-animation">
            <div className="pkmInfo-content">
                <div className="progBar-container-container">
                    {renderStatProgBars()}
                </div>
                <div className="pkmInfo-desc fadeIn-animation">
                    <p>
                        {descToShow}
                    </p>
                </div>
                <div className="overlay-closeBtn-container">
                    <div className="overlay-close-btn" onClick={hideInfo}>
                        &times;
                    </div>
                </div>
                <div className="pkmInfo-img-container">
                    <img className="pkmRoar-animation pkmInfo-img" src={showShiny? pkmToShow.png.sprite.shiny : pkmToShow.png.sprite.reg} onClick={toggleShowShiny} width="220px" height="280px"></img>
                </div>
                <div className="pkmInfo-title" style={{  }}>
                    {displayName}
                </div>
            </div>
        </div>
    </div>
    )
}

export default PkmInfo

/*
/ 
*/
const PkmStatProgBar = ({ stat }) => {
    const statVal = useRef(Math.random() * 260);

    return (
        <div className="pkmStat-progBar-container fasterFadeIn-animation">
            <div className="stat-title">{stat}</div>
            <div className="progBar-container">
                <div className="progress-bar progBar-animation" style={{width: `${statVal.current}px`}}/>
            </div>
        </div>
    );
}

/*
/ Removes the escape character \f from some of the Pokemon text entries which shows up as a black blotch
*/
const rmvEscChars = (pkmDesc) => {
    let descDefault = pkmDesc;
    if(descDefault.includes('\f')) {
        let i = descDefault.indexOf('\f');
        let descArr = descDefault.split('');
        descArr.splice(i,1,' ');
        descDefault = descArr.join('');
    }
    return descDefault;
}