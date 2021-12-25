import { useState, useEffect } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PokemonGrid from './js/Components/pokemonGrid/PokemonGrid'
import Footer from './js/Components/footer/Footer'
import PokemonProvider from './js/Utilities/PokemonProvider';


function App() {
  const [pokemon, setPokemon] = useState([]);

  console.log('Rendered at ' + new Date());
  useEffect(() => {
    console.log('Effected at ' + new Date());
    setTimeout(() => {
      setPokemon((prevPkm) => {
        let pokemon = PokemonProvider();
        return prevPkm.concat(pokemon)
      })
    }, 3000);
  },[]);
  
  /*
  const getPokemon = async () => {
    return PokeApiController.getPokemon();
  }
  */

  return (
    <>
      <NavBar />
      <PokemonGrid pkmObjList={pokemon}/>
      <Footer />
    </>
  );
}

export default App;
