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
    / Description to show => Decided not to use
    */
    const descToShow = rmvEscChars(pkmToShow.desc.default);

    const renderStatProgBars = () => {
        return ['HP', 'ATK', 'DEF', 'SP. ATK', 'SP. DEF', 'SPD'].map((stat) => {
            return <PkmStatProgBar key={stat} stat={stat}/>
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

    const shinySymbol = provideMiscPng('shiny-sym');

    const pkmTypesPng = providePkmTypesPng(pkmToShow.types);
    const renderPkmTypeSyms = () => {
        return pkmTypesPng.map((typePng) => {
            return <PkmTypeSym key={typePng} type={typePng}/>;
        });
    }

    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-half-animation">
            <div className="pkmInfo-content">
                <div className="progBar-container-container">
                    {renderStatProgBars()}
                </div>
                <div className="pkmInfo-desc-container">
                    <div className="pkmInfo-desc fadeIn-animation">
                        <p>
                            {descToShow}
                        </p>
                    </div>
                </div>
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
/
*/
const PkmInfoImg = ({ imgSrc }) => {
    return (
        <div className="fasterFadeIn-animation">
            <img className="pkmRoar-animation pkmInfo-img" src={imgSrc}/>
        </div>
    );
};

/*
/
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
    const statVal = useRef(Math.round(Math.random() * 10) * 29.84);
    //const statVal = useRef(298.4);  // Math is x*298.4/200

    return (
        <div className="pkmStat-progBar-container fasterFadeIn-animation">
            <div className="stat-title">
                {stat}
            </div>
            <div className="progBar-container">
                <div className="progress-fill progBar-animation" style={{width: `${statVal.current}px`}}>
                    <div className="stat-value">{Math.round(statVal.current/298.4*200)}</div>
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