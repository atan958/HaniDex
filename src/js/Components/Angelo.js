import '../../css/Angelo.css'

const angelo = require('../../angelo-assets/beautifulman.png');

const Angelo = () => {
    return (
        <div className='centered'>
            <div class="container">
                <img src={angelo}></img>
                <div class="overlay">
                    <div class="text">The button Donkey</div>
                </div>
            </div>
        </div>
    )
}

export default Angelo
