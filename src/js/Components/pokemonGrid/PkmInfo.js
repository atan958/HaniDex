import { useState, useRef } from 'react'

import { provideMiscPng, providePkmTypesPng } from '../../Utilities/PkmGraphicsProvider';

import '../../../css/PkmInfo.css'

/*
/ Displays the information of a specified Pokemon on an overlay
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

    /*
    /
    */
    const renderStatProgBars = () => {
        return pkmToShow.stats.map((stat) => {
            return <PkmStatProgBar key={stat.name} stat={stat}/>
        });
    }

    /*
    / Creates the img components for the Pokemon's shiny and regular forms
    */
    const [shinyImg, regImg] = [pkmToShow.png.sprite.shiny, pkmToShow.png.sprite.reg].map((pkmPng) => {
        return(
            <PkmInfoImg key={pkmPng} imgSrc={pkmPng}/>
        );
    });

    /*
    /
    */
    const shinySymbol = provideMiscPng('shiny-sym');

    /*
    /
    */
    const pkmTypesPng = providePkmTypesPng(pkmToShow.types);
    /*
    /
    */
    const renderPkmTypeSyms = () => {
        return pkmTypesPng.map((typePng) => {
            return <PkmTypeSym key={typePng} type={typePng}/>;
        });
    }

    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-half-animation">
            <div className="pkmInfo-content">
                <PkmDesc descToShow={descToShow}/>
                <div className="progBar-container-container">
                    {renderStatProgBars()}
                </div>
                <PkmProfile pkmToShow={pkmToShow}/>
                <div className="overlay-closeBtn-container">
                    <div className="overlay-close-btn" onClick={hideInfo}>
                        &times;
                    </div>
                </div>
                <div className="pkmInfo-img-container">
                    <div className="pkmInfo-type-container-container">
                        {renderPkmTypeSyms()}
                    </div>
                    <div className="shiny-sym-btn">
                        <img src={shinySymbol} onClick={toggleShowShiny} style={{ filter: `${showShiny? 'invert(0%)' : 'invert(100%)'}` }}/>
                    </div>
                    {showShiny? shinyImg : regImg}
                </div>
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
/ Creates the sprite image of the given Pokemon png
*/
const PkmInfoImg = ({ imgSrc }) => {
    return (
        <div className="fasterFadeIn-animation">
            <img className="pkmRoar-animation pkmInfo-img" src={imgSrc}/>
        </div>
    );
};

/*
/ Creates the type symbol of the given Pokemon types
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
/ Generates a progress bar for a given stat type
*/
const PkmStatProgBar = ({ stat }) => {
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
/ Helper Method to PkmStatProgBar component:
/
/ Returns the appropriate shortened title for each stat name
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
            statDispName = 'SP. ATK'
            break;
        case 'special-defense':
            statDispName = 'SP. DEF'
            break;
        case 'speed':
            statDispName = 'SPD'
            break;
    }
    return statDispName;
}

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
/
*/
const PkmProfile = ({ pkmToShow }) => {
    const pkmHeight = pkmToShow.height + ' m';
    const pkmWeight = pkmToShow.weight + ' kg';
    const captureRate = `${Math.round(pkmToShow.captureRate*100)}%`;
    const femaleRatio = pkmToShow.genderRate;

    const eggGroups = pkmToShow.eggGroups.join(', ');
    const hatchSteps = pkmToShow.hatchSteps;
    const abilities = pkmToShow.abilities.join(', ');
    const evs = pkmToShow.evs.map((evStat) => {
        return (
            `${evStat.effort} ${getStatDispName(evStat.stat.name).split(' ').join('')}`
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
                            <div className="male-ratio-progBar-fill" style={{ width: `${(1-femaleRatio)*200}px` }}>
                                <div className={`gender-ratio-text ${((1-femaleRatio) > 0.15) && 'show-gender-ratio-text'}`}>{(1-femaleRatio)*100}%</div>
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
/ Removes the escape character \f, \n from some of the Pokemon text entries which shows up as a black blotch
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