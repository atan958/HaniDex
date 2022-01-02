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

    /*
    / Description to show => Decided not to use
    */
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
                        {pkmToShow.desc.default}
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
/ Generates a progress bar for a given stat type
*/
const PkmStatProgBar = ({ stat }) => {
    const statVal = useRef(Math.round(Math.random() * 10) * 25.8);
    //const statVal = useRef(258);

    return (
        <div className="pkmStat-progBar-container fasterFadeIn-animation">
            <div className="stat-title">
                {stat}
            </div>
            <div className="progBar-container">
                <div className="progress-fill progBar-animation" style={{width: `${statVal.current}px`}}>
                    <div className="stat-value">{Math.round(statVal.current/258*200)}</div>
                </div>
            </div>
        </div>
    );
}

/*
/ Removes the escape character \f, \n from some of the Pokemon text entries which shows up as a black blotch
*/
const rmvEscChars = (pkmDesc) => {
    console.log(pkmDesc.split(''));
    let descDefault = pkmDesc;
    while(descDefault.includes('\f')) {
        let i = descDefault.indexOf('\f');
        console.log('f: ' + i)
        let descArr = descDefault.split('');
        console.log(descArr[i-1].length);
        (descArr[i-1].length>0)?
            descArr[i] = ''
            :
            descArr[i] = ' ';
        console.log(descArr);
        descDefault = descArr.join('');
    }
    while(descDefault.includes('\n')) {
        let i = descDefault.indexOf('\n');
        console.log('n: ' + i);
        let descArr = descDefault.split('');
        //descArr.splice(i,1,' ');
        console.log(descArr);
        descArr[i] = ' ';
        console.log(descArr);
        descDefault = descArr.join('');
    }
    return descDefault;
}