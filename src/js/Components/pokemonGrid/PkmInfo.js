import { useState } from 'react'

import '../../../css/PkmInfo.css'

/*
/ Displays the information of a specified Pokemon on an overlay
*/
const PkmInfo = ({pkmToShow, hideInfo}) => {
    const [showShiny, setShowShiny] = useState(false);
    const toggleShowShiny = () => { setShowShiny(!showShiny) };

    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-half-animation">
            <div className="pkmInfo-content">
                <div className="overlay-closeBtn-container">
                    <div className="overlay-close-btn" onClick={hideInfo}>
                        &times;
                    </div>
                </div>
                <div className="pkmInfo-img-container">
                    <img className="pkmRoar-animation pkmInfo-img" src={showShiny? pkmToShow.png.sprite.shiny : pkmToShow.png.sprite.reg} onClick={toggleShowShiny} width="220px" height="280px"></img>
                </div>
                <div className="pkmInfo-title">
                    {pkmToShow.name.charAt(0).toUpperCase() + pkmToShow.name.slice(1,pkmToShow.name.length)}
                </div>
            </div>
        </div>
    </div>
    )
}

export default PkmInfo
