import '../../css/Angelo.css'

const angelo = require('../../angelo-assets/beautifulman.png');

/*
/ Used to display the creator of the web app
*/
const Angelo = () => {
    return (
        <div className="angelo-container">
        <div className='centered fasterFadeIn-animation'>
            <div className="container">
                <img src={angelo}></img>
                <div className="overlay">
                    <div className="text">Howdy!</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Angelo
