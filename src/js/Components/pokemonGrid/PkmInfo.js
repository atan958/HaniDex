import '../../../css/PkmInfo.css'

/*
const PkmInfo = ({pkmData, hideInfo}) => {
    return (
    <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>&times;</a>
        <div className="overlay-content">
            <div className="pkmInfo-content-container pkmInfo-center">
                HIIII
            </div>
        </div>
    </div>
    )
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
  }
  
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
*/

const PkmInfo = ({pkmToShow, hideInfo}) => {
    return (
    <div className="pkmInfo-overlay-container">
        <div className="pkmInfo-content-container content-centered fasterFadeIn-animation">
            <div className="pkmInfo-content">
                <div className="overlay-closeBtn-container" onClick={hideInfo}>
                    <div className="overlay-close-btn">
                        &times;
                    </div>
                </div>

                <div className="pkmInfo-img">
                    <img src={pkmToShow.png} width="220px" height="280px"></img>
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
