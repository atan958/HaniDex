import { useState } from 'react'

const PkmItem = ({ pkmData }) => {
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => {
        setSelected((prevSelected) => {
            return !prevSelected;
        });
    }
    console.log('called');
    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <div className="grid-item pkmItem fadein-effect"  style={selected? { backgroundColor: '#b44b4b'} : null} onClick={toggleSelected}>
            {pkmData.img}
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PkmItem