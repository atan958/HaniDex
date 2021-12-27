import { useState, useEffect, useRef } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'
import { providePokemonData } from './js/Utilities/PokemonProvider';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loadingPkm, setLoadingPkm] = useState(true);
  const numRnd = useRef(0);

  numRnd.current += 1;
  console.log('render #' + numRnd.current);

  useEffect(() => {
    console.log('Setting pokemon at ' + numRnd.current);
    
    // This timeout will be called at a render and will use the same state/values from that render
    setTimeout(() => {
      setPokemon((prevPkm) => {
        console.log('Pokemon are set at ' + numRnd.current);
        let pokemon = providePokemonData();
        return prevPkm.concat(pokemon)
      })
    }, 5000);
  },[]);

  // Sets the loading state whenever pokemon changes
  // Executes this after second DOM render mounted (i.e. once pokemon are loaded)
  useEffect(() => {
    console.log('render #' + numRnd.current + " from setLdPkm");
    console.log('Pokemon changed at ' + numRnd.current);
    pokemon.length > 0 ?
    setLoadingPkm(false)
    :
    setLoadingPkm(true);
  }, [pokemon]);
  
  /*
  const getPokemon = async () => {
    return PokeApiController.getPokemon();
  }
  */

  return (
    <>
      <NavBar />
      <PkmGrid pkmDataList={pokemon} loadingPkm={loadingPkm}/>
      <Footer />
    </>
  );
}

export default App;
