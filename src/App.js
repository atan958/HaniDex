import { useState, useEffect } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PokemonGrid from './js/Components/pokemonGrid/PokemonGrid'
import Footer from './js/Components/footer/Footer'
import PokemonProvider from './js/Utilities/PokemonProvider';


function App() {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState(PokemonProvider());

  return (
    <>
      <NavBar />
      <PokemonGrid pkmObjList={pokemon} search={search} setSearch={setSearch}/>
      <Footer />
    </>
  );
}

export default App;
