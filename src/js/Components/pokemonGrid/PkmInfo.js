import { useState, useRef } from 'react'

import { provideMiscPng, providePkmTypesPng, providePkmInfoPng } from '../../Utilities/PkmGraphicsProvider';
import { providePkmTypeColour } from '../../Utilities/PkmColourProvider';

import '../../../css/PkmInfo.css'
import '../../../animations/pkm-grid/pkmInfo-anm.css'

/*
/ Component: Displays the information of a specified Pokemon on an overlay
*/
const PkmInfo = ({ pkmToShow, hideInfo }) => {
    const [showShiny, setShowShiny] = useState(false);
    const toggleShowShiny = () => { setShowShiny(!showShiny) };

    /*
    / Capitalizes the first letter of every name of the Pokemon
    */
    const displayName = pkmToShow.name.pkmItem.split(' ').map((namePart) => {
        return namePart.charAt(0).toUpperCase() + namePart.slice(1, namePart.length);
    }).join(' ');

    /*
    / Generates the description of the Pokemon to show
    */
    const descToShow = rmvEscChars(pkmToShow.desc.default);

    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-half-animation">
            <div className="pkmInfo-content">
                <PkmDesc descToShow={descToShow}/>
                <PkmStatProgBarGrid pkmToShow={pkmToShow}/>
                <PkmProfile pkmToShow={pkmToShow}/>
                <div className="overlay-closeBtn-container">
                    <div className="overlay-close-btn" onClick={hideInfo}>
                        &times;
                    </div>
                </div>
                <PkmInfoImgContainer pkmToShow={pkmToShow} showShiny={showShiny} toggleShowShiny={toggleShowShiny}/>
                <div className="pkmInfo-title">
                    {displayName}
                </div>
            </div>
        </div>
    </div>
    )
}

export default PkmInfo

/*
/ Helper Component: 
*/
const PkmInfoImgContainer = ({ pkmToShow, showShiny, toggleShowShiny }) => {
    /*
    / Creates the img element components of the given Pokemon's shiny and regular sprites respectively
    */
    const regImg = <PkmInfoImg imgSrc={ providePkmInfoPng(pkmToShow.id).reg }/>
    const shinyImg = <PkmInfoImg imgSrc={ providePkmInfoPng(pkmToShow.id).shiny }/>

    /*
    / Gets the colour code for the given Pokemon's type(s)
    */
    const pkmTypeColour = providePkmTypeColour(pkmToShow.types);

    /*
    / Helper Method: Generates the PkmTypeSym components for the given Pokemon's types
    */
    const renderPkmTypeSyms = () => {
        const pkmTypesPng = providePkmTypesPng(pkmToShow.types);

        return pkmTypesPng.map((typePng) => {
            return <PkmTypeSym key={typePng} type={typePng}/>;
        });
    }
 
    /*
    / Gets the png for the shiny symbol
    */
    const shinySymbol = provideMiscPng('shiny-sym');

    return (
        <div className="pkmInfo-img-container" style={{ backgroundImage: `radial-gradient(white, ${pkmTypeColour})` }}>
            <div className="pkmInfo-id-container fadeIn-animation">
                {`#${pkmToShow.id}`}
            </div>
            <div className="pkmInfo-type-container-container">
                {renderPkmTypeSyms()}
            </div>
            <div className="shiny-sym-btn">
                <img src={shinySymbol} onClick={toggleShowShiny} style={{ filter: `${showShiny? 'invert(0%)' : 'invert(100%)'}` }}/>
            </div>
            {showShiny? shinyImg : regImg}
        </div>
    );
}

/*
/ Helper Component: Creates the sprite image of the given Pokemon png
*/
const PkmInfoImg = ({ imgSrc }) => {
    return (
        <div className="fasterFadeIn-animation">
            <img className="pkmRoar-animation pkmInfo-img" src={imgSrc}/>
        </div>
    );
};

/*
/ Helper Helper Component: Creates the type symbol of the given Pokemon types
*/
const PkmTypeSym = ({ type }) => {
    return (
        type?
        <div className="pkmInfo-type-container fadeIn-animation">
            <img src={type}/>
        </div>
        :
        <div/>
    );
};

/*
/ Helper Component: Displays a given Pokemon's stats
*/
const PkmStatProgBarGrid = ({ pkmToShow }) => {
    const renderStatProgBars = () => {
        return pkmToShow.stats.map((stat) => {
            return <PkmStatProgBar key={stat.name} stat={stat} types={pkmToShow.types}/>
        });
    }

    return (
        <div className="progBar-container-container">
            {renderStatProgBars()}
        </div>
    );
}

/*
/ Helper Helper Component: Generates a progress bar for a given stat type
*/
const PkmStatProgBar = ({ stat, types }) => {
    const statName = getStatDispName(stat.name);
    const statVal = stat.value;

    const progBarWidth = 299.2;
    const maxSingleStat = 255;

    return (
        <div className="pkmStat-progBar-container fasterFadeIn-animation">
            <div className="stat-title">
                {statName}
            </div>
            <div className="progBar-container">
                <div className="progress-fill progBar-animation" style={{width: `${statVal*progBarWidth/maxSingleStat}px`}}>
                    <div className="stat-value">{statVal}</div>
                </div>
            </div>
        </div>
    );
}

/*
/ Helper Method: Returns the appropriate shortened title for each stat name
*/
const getStatDispName = (statName) => {
    let statDispName = "";
    switch(statName) {
        case 'hp':
            statDispName = 'HP'
            break;
        case 'attack':
            statDispName = 'ATK'
            break;
        case 'defense':
            statDispName = 'DEF'
            break;
        case 'special-attack':
            statDispName = 'SP.ATK'
            break;
        case 'special-defense':
            statDispName = 'SP.DEF'
            break;
        case 'speed':
            statDispName = 'SPD'
            break;
    }
    return statDispName;
}

/*
/ Helper Component: Displays a given Pokemon's Pokedex text entry
*/
const PkmDesc = ({ descToShow }) => {
    return (
        <div className="pkmInfo-desc-container">
            <div className="pkmInfo-desc fasterFadeIn-animation">
                <p>
                    {descToShow}
                </p>
            </div>
        </div>
    );
}

/*
/ Helper Component: Displays a given Pokemon's profile information
*/
const PkmProfile = ({ pkmToShow }) => {
    /*
    / Content for the left half of PkmProfile
    */
    const pkmHeight = `${pkmToShow.height} m`;
    const pkmWeight = `${pkmToShow.weight} kg`;
    const captureRate = `${Math.round(pkmToShow.captureRate*100)}%`;
    let femaleRatio = 0;
    let maleRatio = 0;
    if(pkmToShow.genderRate >= 0) {
        femaleRatio= pkmToShow.genderRate;
        maleRatio= 1 - pkmToShow.genderRate;
    }
    let genderless = (femaleRatio === 0) && (maleRatio === 0);

    /*
    / Content for the right half of PkmProfile
    */
    const eggGroups = pkmToShow.eggGroups.join(', ');
    const hatchSteps = pkmToShow.hatchSteps;
    const abilities = pkmToShow.abilities.join(', ');
    const evs = pkmToShow.evs.map((evStat) => {
        return (
            `${evStat.effort} ${getStatDispName(evStat.stat.name)}`
        );
    }).join(', ');

    return (
        <div className="pkmInfo-profile-container fasterFadeIn-animation">
            <div className="pkmInfo-profile1">
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Height: 
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {pkmHeight}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Weight:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {pkmWeight}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Catch Rate:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {captureRate}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Gender Ratio:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        <div className="gender-ratio-progBar-container">
                            {genderless && 'No Gender'}
                            <div className="male-ratio-progBar-fill" style={{ width: `${maleRatio*200}px` }}>
                                <div className={`gender-ratio-text ${(maleRatio > 0.15) && 'show-gender-ratio-text'}`}>{maleRatio*100}%</div>
                            </div>
                            <div className="female-ratio-progBar-fill" style={{ width: `${femaleRatio*200}px` }}>
                                <div className={`gender-ratio-text ${(femaleRatio > 0.15) && 'show-gender-ratio-text'}`}>{femaleRatio*100}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pkmInfo-profile2">
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Egg Groups:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {eggGroups}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Hatch Steps:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {hatchSteps}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        Abilities:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {abilities}
                    </div>
                </div>
                <div className="pkmInfo-grid-item-container">
                    <div className="pkmInfo-grid-item-title">
                        EVs:
                    </div>
                    <div className="pkmInfo-grid-item-content">
                        {evs}
                    </div>
                </div>
            </div>
        </div>
    );
}

/*
/ Helper Method: Removes the escape character \f, \n from some of the Pokemon text entries which shows up as a black blotch
*/
const rmvEscChars = (pkmDesc) => {
    let descDefault = pkmDesc;
    while(descDefault.includes('\f')) {
        let i = descDefault.indexOf('\f');
        let descArr = descDefault.split('');
        descArr[i] = ' ';
        descDefault = descArr.join('');
    }

    while(descDefault.includes('\n')) {
        let i = descDefault.indexOf('\n');
        let descArr = descDefault.split('');
        descArr[i] = ' ';
        descDefault = descArr.join('');
    }
    return descDefault;
}