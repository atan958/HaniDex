import { useState, useEffect } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'
import PokemonProvider from './js/Utilities/PokemonProvider';


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loadingPkm, setLoadingPkm] = useState(true);

  console.log('Rendered at ' + new Date());
  useEffect(() => {
    console.log('Effected at ' + new Date());
    setTimeout(() => {
      
      setPokemon((prevPkm) => {
        console.log('setPkm');
        let pokemon = PokemonProvider();
        return prevPkm.concat(pokemon)
      })

      setLoadingPkm((prevLdPkm) => {
        console.log('setLdPkm');
        return !prevLdPkm;
      });

    }, 5000);
  },[]);
  
  /*
  const getPokemon = async () => {
    return PokeApiController.getPokemon();
  }
  */

  return (
    <>
      <NavBar />
      <PkmGrid pkmObjList={pokemon} loadingPkm={loadingPkm}/>
      <Footer />
    </>
  );
}

export default App;
