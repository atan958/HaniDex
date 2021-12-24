import { useState } from 'react'

const PokemonItem = ({ pkmData }) => {
    const [selected, setSelected] = useState(false);
    const toggleSelected = () => {
        setSelected((prevSelected) => {
            return !prevSelected;
        });
    }

    let pkmName = pkmData.name.charAt(0).toUpperCase() + pkmData.name.slice(1, pkmData.name.length);

    return (
        <div className="grid-item giExtras"  style={selected? { backgroundColor: '#b44b4b'} : null}onClick={toggleSelected}>
            {pkmData.img}
            <h4>{pkmName}</h4>
        </div>
    )
}

export default PokemonItem