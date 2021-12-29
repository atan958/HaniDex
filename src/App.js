import { useState, useEffect, useRef } from 'react'
import NavBar from './js/Components/navBar/NavBar'
import PkmGrid from './js/Components/pokemonGrid/PkmGrid'
import Footer from './js/Components/footer/Footer'
import { providePokemonData } from './js/Utilities/PokemonProvider';


function App() {
  /*
  / Used to store the Pokemon data inside the application
  */
  const [pokemon, setPokemon] = useState([]);

  /*
  / Used to determine whether Pokemon data is being loaded into the application
  */
  const [loadingPkm, setLoadingPkm] = useState(true);

  /*
  / *** ...TO BE DETERMINED... ***
  */
  const retrievedPokemon = useRef(providePokemonData());  // Replace with maybe once calling PokeApi => Call before the setTimeOut

  /*
  / Retrieves the Pokemon data => Called AFTER the App component first mounts
  */
  useEffect(() => {
    setTimeout(() => {
      setPokemon((prevPkm) => {
        let pokemon = providePokemonData();
        return prevPkm.concat(pokemon)
      })
    }, 5000);
  },[]);

  /*
  / Removes the loading state due to retrieval of Pokemon => Called only AFTER Pokemon are retrieved
  */
  useEffect(() => {
    pokemon.length > 0 ?
    setLoadingPkm(false)
    :
    setLoadingPkm(true);
  }, [pokemon]);

  return (
    <>
      <NavBar />
      <PkmGrid pkmDataList={pokemon} loadingPkm={loadingPkm}/>
      <Footer />
    </>
  );
}

export default App;
