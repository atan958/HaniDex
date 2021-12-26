import '../../css/Angelo.css'

const angelo = require('../../angelo-assets/beautifulman.png');

const Angelo = () => {
    return (
        <div className='centered fadein-effect'>
            <div class="container">
                <img src={angelo}></img>
                <div class="overlay">
                    <div class="text">Howdy!</div>
                </div>
            </div>
        </div>
    )
}

export default Angelo
