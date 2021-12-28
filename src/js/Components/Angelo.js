import '../../css/Angelo.css'

const angelo = require('../../angelo-assets/beautifulman.png');

const Angelo = () => {
    return (
        <div className="angelo-container">
        <div className='centered fadeIn-animation'>
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
