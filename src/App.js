import { useState, useEffect, useRef } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'
import { providePokemonData } from './js/Utilities/PokemonProvider';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loadingPkm, setLoadingPkm] = useState(true);
  const numRnd = useRef(0);
  const retrievedPokemon = useRef(providePokemonData());  // Replace with maybe once calling PokeApi
                                                          // Call before the setTimeOut

  numRnd.current += 1;
  console.log('render #' + numRnd.current);
  console.log('Rendered from APP');

  useEffect(() => {
    // This timeout will be called at a render and will use the same state/values from that render (IDK)
    setTimeout(() => {
      setPokemon((prevPkm) => {
        let pokemon = providePokemonData();
        return prevPkm.concat(pokemon)
      })
    }, 5000);
  },[]);

  // Sets the loading state whenever pokemon changes (i.e. only at app start-up)
  // Executes this after second DOM render mounted (i.e. once pokemon are loaded i.e. non-zero length)
  useEffect(() => {
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
